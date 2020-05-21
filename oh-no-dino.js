const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

let bg = new Image();
bg.src = 'background1.png';

let dino = new Dino(canvas);
// let scoreboard = document.getElementById('scoreboard');
// let scoreSpan = scoreboard.getElementsByTagName('span');
let score = 0;
let myObstacles = [];
let intervalID = 0;
let myRewards = [];



//loop
1 // UPDATE
2 // clear
3 // redraw again

ctx.drawImage(bg, 0, 0);


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function gameStart() {
    intervalID = setInterval(function () {
        //update;
        //clear;
        clearCanvas();
        //redraw;
        dino.draw();
        treesAppear();
        unicornsAppear();
        moveObjects(myObstacles);
        moveObjects(myRewards);
        collisionTreeDino();
        collisionTreeUnicorn();
        refreshScore();
    }, 50);
}

function refreshScore() {
    scoreSpan = score;
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText('Score: ' + score, 10, 30); // display the score
}

function keydownEvents(event) {
    if (event.key === 'ArrowRight' && dino.x + 30 < canvas.width - dino.width) {
        dino.x += 30;
    } else if (event.key === 'ArrowLeft' && dino.x > 0) {
        dino.x -= 30;
    }
}

function treesAppear() {
    let randomAppear = Math.floor(Math.random() * 14);
    let randomx = Math.floor(Math.random() * canvas.width - 90);
    if (randomAppear === 1) {
        let tree = new Tree(canvas, randomx);

        myObstacles.push(tree);
    }
}

function moveObjects(anyArray) {
    anyArray.forEach(function (element) {
        element.y += 4;
        element.draw();
    });
}

function isColliding(object1, object2) {
    if (
        (object1.y + object1.height >= object2.y) &&
        (((object1.x < object2.x + object2.width) && (object1.x > object2.x)) ||
            ((object1.x + object1.width < object2.x + object2.width) &&
                (object1.x + object1.width > object2.x)))) {
        return true;
    } else {
        return false;
    }
}

function collisionTreeDino() {
    //checking collision
    for (let i = 0; i < myObstacles.length; i++) {
        if (isColliding(myObstacles[i], dino)) {
            alert('GAME OVER');
            clearInterval(intervalID);
            location.reload();
        }
    }
}

function unicornsAppear() {

    let randomAppear = Math.floor(Math.random() * 14);
    let randomx = Math.floor(Math.random() * canvas.width - 50);
    if (randomAppear === 1) {
        let unicorn = new Unicorn(canvas, randomx);

        myRewards.push(unicorn);
    }
}

function collisionTreeUnicorn() {
    let unicornThatCollidedIndex = 0;
    let collisionHappened = false;
    //checking collision
    for (let i = 0; i < myRewards.length; i++) {
        const unicorn = myRewards[i];
        if (isColliding(unicorn, dino)) {
            // here is when it collided
            score++;
            unicornThatCollidedIndex = i;
            collisionHappened = true;
        }
    }
    if (collisionHappened) {
        myRewards.splice(unicornThatCollidedIndex, 1);
    }
}



window.addEventListener('load', gameStart);
window.addEventListener('keydown', keydownEvents);