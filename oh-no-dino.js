const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');

let bg = new Image();
bg.src = 'background1.png';

let dino = new Dino(canvas);
let scoreboard = document.getElementById('scoreboard')
let score = scoreboard.getElementsByTagName('span');
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
        moveTrees();
        moveUnicorns();
        collisionTreeDino();
        collisionTreeUnicorn();
    }, 50);
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
    let randomx = Math.floor(Math.random() * canvas.width);
    if (randomAppear === 1) {
        let tree = new Tree(canvas, randomx);

        myObstacles.push(tree);
    }
}

function moveTrees() {
    myObstacles.forEach(function (tree) {
        tree.y += 6;
        tree.draw();
    });
}

function collisionTreeDino() {
    //checking collision
    for (let i = 0; i < myObstacles.length; i++) {
        if ((myObstacles[i].y + myObstacles[i].height >= dino.y) && (((myObstacles[i].x < dino.x + dino.width) && (myObstacles[i].x > dino.x)) || ((myObstacles[i].x + myObstacles[i].width < dino.x + dino.width) && (myObstacles[i].x + myObstacles[i].width > dino.x)))) {
            alert('GAME OVER');
            clearInterval(intervalID);
            location.reload();
        }
    }
}

function unicornsAppear() {

    let randomAppear = Math.floor(Math.random() * 14);
    let randomx = Math.floor(Math.random() * canvas.width);
    if (randomAppear === 1) {
        let unicorn = new Unicorn(canvas, randomx);

        myRewards.push(unicorn);
    }
}

function moveUnicorns() {
    myRewards.forEach(function (unicorn) {
        unicorn.y += 5;
        unicorn.draw();
    });
}

function collisionTreeUnicorn() {
    //checking collision
    for (let i = 0; i < myRewards.length; i++) {
        if ((myRewards[i].y + myRewards[i].height >= dino.y) && (((myRewards[i].x < dino.x + dino.width) && (myRewards[i].x > dino.x)) || ((myRewards[i].x + myRewards[i].width < dino.x + dino.width) && (myRewards[i].x + myRewards[i].width > dino.x)))) {
            score += 1;
        }
    }
}


window.addEventListener('load', gameStart);
window.addEventListener('keydown', keydownEvents);