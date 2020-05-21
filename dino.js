class Dino {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = 85;
        this.height = 70;
        this.x = 200;
        this.y = 480;
    }
    draw() {
        let dinoImg = new Image();
        dinoImg.src = 'dino2.png';
        ctx.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }
}

class Tree {
    constructor(canvas, xposition) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = 90;
        this.height = 78;
        this.x = xposition;
        this.y = 0;
    }
    draw() {
        let treeImg = new Image();
        treeImg.src = 'tree1.png';
        ctx.drawImage(treeImg, this.x, this.y, this.width, this.height);
    }
}

class Unicorn {
    constructor(canvas, xposition) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = 50;
        this.height = 45;
        this.x = xposition;
        this.y = 0;
    }
    draw() {
        let unicornImg = new Image();
        unicornImg.src = 'unicorn.PNG';
        ctx.drawImage(unicornImg, this.x, this.y, this.width, this.height);
    }
}