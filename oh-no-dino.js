const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

let bg = new Image();
bg.src = 'background1.PNG';

let dino = new Dino(canvas);
let score = 0;
let myObstacles = [];
let intervalID = 0;
let myRewards = [];
let probabilityOfTree = 1 / 51;
let probabilityOfUnicorn = 1 / 60;
let ohnoSound = new Audio('ohno.mp3');
let eatSound = new Audio('eat.mp3');


//         //loop
//         1 // UPDATE
// 2 // clear
// 3 // redraw again

ctx.drawImage(bg, 0, 0);


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function gameStart() {
    // location.href = 'index.html';

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

function randomXposition() {
    let tileQuantity = Math.floor(canvas.width / tileWidth);
    let randomTile = Math.floor(Math.random() * tileQuantity); // 0, 1, 2, 3 -> 0, 90, 180, 270
    let randomx = (randomTile * tileWidth);
    return randomx;
}

function treesAppear() {
    let randomAppear = Math.floor(Math.random() / probabilityOfTree);
    if (randomAppear === 1) {
        let tree = new Tree(canvas, randomXposition());
        myObstacles.push(tree);
    }
}

function moveObjects(anyArray) {
    anyArray.forEach(function (element) {
        element.y += 4;
        element.draw();
    });
}

// function isInside(point, rectangle) {
//     if (point.x > rectangle.x &&
//         point.x < rectangle.x + rectangle.width &&
//         point.y > rectangle.y &&
//         point.y < rectangle.y + rectangle.height) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const topRight = {
//     x: object2.x + object2.width,
//     y: object2.y
// }    
// cont bottomRight = {
//     x: object2.x + object2.width,
//     y: object2.y + object2.height
// }     
// const topLeft = {
//     x: object2.x,
//     y: object2.y
// }
// const bottomLeft = {
//     x: object2.x,
//     y: object2.y + object2.height
// }


function isColliding(object1, dino) {
    const topDino = dino.y;
    const bottomDino = dino.y + dino.height;
    const leftDino = dino.x;
    const rightDino = dino.x + dino.width;

    const bottomTree = object1.y + object1.height;
    const leftTree = object1.x;
    const rightTree = object1.x + object1.width;

    let topDinoCollission = bottomTree - 4 > topDino && bottomTree < bottomDino;
    let leftDinoCollision = rightTree > leftDino && rightTree < rightDino;
    let rightDinoCollision = leftTree < rightDino && leftTree > leftDino;
    if ((topDinoCollission && leftDinoCollision) || (topDinoCollission && rightDinoCollision)) {
        return true;
    }
}



function collisionTreeDino() {
    //checking collision
    for (let i = 0; i < myObstacles.length; i++) {
        if (isColliding(myObstacles[i], dino)) {
            // alert('GAME OVER');
            clearInterval(intervalID);
            location.href = 'GameOverScreen.html';
            // location.reload();
            ohnoSound.play();
        }
    }
}

function unicornsAppear() {
    const unicornXposition = (tileWidth / 2) - (unicornWidth / 2);
    let randomAppear = Math.floor(Math.random() / probabilityOfUnicorn);
    if (randomAppear === 1) {
        let unicorn = new Unicorn(canvas, randomXposition() + unicornXposition); // second argument : shifts the unicorn that mount to the right 
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
            if (score == 3) {
                clearInterval(intervalID);
                location.href = 'WinScreen.html';
            }
        }
    }
    if (collisionHappened) {
        myRewards.splice(unicornThatCollidedIndex, 1);
        audio.play(eatSound);
    }
}



window.addEventListener('load', gameStart);
window.addEventListener('keydown', keydownEvents);