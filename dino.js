const tileHeight = 78;
const tileWidth = 90;
const unicornWidth = 50;

class Dino {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = tileWidth;
        this.height = 70;
        this.x = 108;
        this.y = 475;
    }
    draw() {
        let dinoImg = new Image();
        dinoImg.src = 'dino2.png';
        ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);

        // ctx.beginPath();
        // ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.stroke();
    }
}

class Tree {
    constructor(canvas, xposition) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = tileWidth;
        this.height = tileHeight;
        this.x = xposition;
        this.y = 0;
    }
    draw() {
        let treeImg = new Image();
        treeImg.src = 'tree1.png';
        ctx.drawImage(treeImg, this.x, this.y, this.width, this.height);

        // ctx.beginPath();
        // ctx.rect(this.x, this.y, this.width, this.height);
        // ctx.stroke();
    }
}

class Unicorn {
    constructor(canvas, xposition) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = unicornWidth;
        this.height = 45;
        this.x = xposition;
        this.y = 0;
    }
    draw() {
        let unicornImg = new Image();
        unicornImg.src = 'unicorn.png';
        ctx.drawImage(unicornImg, this.x, this.y, this.width, this.height);
    }
}