var player;
var edges;

var modoDeJogo = "platform";
var isIsometric = true;

function preload() {}

function setup() {
  createCanvas(1000, 800);

  player = createSprite(500, 200, 20, 20);
  player.shapeColor = "red";
  edges = createEdgeSprites();
}

//o jogo é realizado aqui
function draw() {
  background("white");

  if (modoDeJogo === "platform") {
    platformMode();
  } else if (modoDeJogo === "isometric") {
    isometricMode();
  }

  switchMode();

  drawSprites();
  if (modoDeJogo == "gameOver") {
    background("black");
  }
}

//modo isometrico
function isometricMode() {
  background("blue");

  player.velocityY = 0;
  if (keyDown("w")) {
    player.y -= 5;
  }
  if (keyDown("s")) {
    player.y += 5;
  }
  if (keyDown("d")) {
    player.x += 5;
  }
  if (keyDown("a")) {
    player.x -= 5;
  }
}

//modo plataforma
function platformMode() {
  background("yellow");

  if (keyDown("w")) {
    player.velocityY = -15;
  }

  player.velocityY = player.velocityY + 1;
  player.collide(edges);
}

//trocar modo de jogo
function switchMode() {
  if (keyWentUp("space") && !isIsometric) {
    modoDeJogo = "isometric";
    isIsometric = true;
    player.x = 500;
    player.y = 200;
  } else if (keyWentUp("space") && isIsometric) {
    modoDeJogo = "platform";
    isIsometric = false;

    player.x = 200;
    player.y = 600;
  }
}
