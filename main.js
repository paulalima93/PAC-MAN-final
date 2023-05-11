var pacman,walls, enemy1,enemy2, enemy3, enemy4;
var score = 0;
var enemyImg;   // guardar imagem do inimigo
var allEnemies = []; // criando vetor de inimigos
var numOfenemies = 0;// contador de inimigos

var vx1 =2;
var vx2 =2;
var vx3 =2;
var vx4 =2;

var gameState = "initial"

var walls = [

    {x:550,y:450,w:1200,h:40},
    {x:550,y:20,w:1200,h:40},
    {x:10,y:20,w:40,h:1200},
    {x:700,y:70,w:40,h:1200},
    
    {x:100, y:90,w:70,h:40},
    {x:210,y:90,w:70, h:40},
    {x:310,y:90,w:70, h:40},
    {x:410,y:90,w:70, h:40},
    {x:510,y:90,w:70, h:40},
    {x:610,y:90,w:70, h:40},
    //line 2
    {x:150,y:170,w:90,h:50},
    {x:300,y:170,w:90,h:50},
    {x:450,y:170,w:90,h:50},
    {x:600,y:170,w:90,h:50},
//box
    {x:435,y:250,w:90,h:20},
    {x:465,y:300,w:30,h:80},
    {x:370,y:325,w:200,h:30},
    {x:290,y:250,w:90,h:20},
    {x:260,y:300,w:30,h:80},
    
    {x:130,y:270,w:90,h:40},
    {x:130,y:360,w:90,h:40},
    {x:590,y:270,w:90,h:40},
    {x:590,y:360,w:90,h:40},
    
    {x:355,y:365,w:90,h:50}
]

var sugarDots = [
    {x:100,y:50,w:10,h:10},
    {x:200,y:50,w:10,h:10},
    {x:300,y:50,w:10,h:10},
    {x:400,y:50,w:10,h:10},
    {x:500,y:50,w:10,h:10},
    {x:600,y:50,w:10,h:10},
   
    //second line
    {x:100,y:130,w:10,h:10},
    {x:200,y:130,w:10,h:10},
    {x:300,y:130,w:10,h:10},
    {x:400,y:130,w:10,h:10},
    {x:500,y:130,w:10,h:10},
    {x:600,y:130,w:10,h:10},
   
    //third line
    {x:100,y:210,w:10,h:10},
    {x:200,y:210,w:10,h:10},
    {x:300,y:210,w:10,h:10},
    {x:400,y:210,w:10,h:10},
    {x:500,y:210,w:10,h:10},
    {x:600,y:210,w:10,h:10},
    
    //fourth line
    
    {x:100,y:310,w:10,h:10},
    {x:200,y:290,w:10,h:10},
    {x:300,y:290,w:10,h:10},
    {x:400,y:290,w:10,h:10},
    {x:500,y:290,w:10,h:10},
    {x:600,y:310,w:10,h:10},
    
    //fifth line 
    {x:100,y:410,w:10,h:10},
    {x:200,y:410,w:10,h:10},
    {x:300,y:410,w:10,h:10},
    {x:400,y:410,w:10,h:10},
    {x:500,y:410,w:10,h:10},
    {x:600,y:410,w:10,h:10},
]

// criando posições aleatórias 
var allEnemies = [
    {x: 200, y: 410},
    {x: 600, y: 310},
    {x: 300, y: 130},   
    {x: 600, y: 55}, 
    
]

var allwalls =[]
var allsugar=[]

function preload() {
  //adicione a imagem aqui
    enemyImg = loadImage("enemy.png")
}
function setup() {
   createCanvas(710, 470);
   pacman = createSprite(350,200,30,30);
   pacman.shapeColor = "yellow";
  
    enemy1 = createSprite(200,410,20,20);
    enemy1.addImage("enemy-Image",enemyImg);
    enemy1.scale = 0.02;
    
    enemy2 = createSprite(600,230,20,20);

    enemy3 = createSprite(300,130,20,20);

    enemy4 = createSprite(600,55,20,20);

    // adicione inimigo aqui
    enemy2.addImage("enemy-Image",enemyImg);
    enemy2.scale = 0.02;  

   // adicione inimigo aqui
    enemy3.addImage("enemy-Image",enemyImg);
    enemy3.scale = 0.02; 

    // adicione inimigo aqui
    enemy4.addImage("enemy-Image",enemyImg);
    enemy4.scale = 0.02;    
    
   for (var i in walls){
        var wall = createSprite(walls[i].x, walls[i].y, walls[i].w, walls[i].h)
        allwalls.push(wall)
    } 
    
    for (var i in sugarDots){
        var sugar = createSprite(sugarDots[i].x, sugarDots[i].y, sugarDots[i].w, sugarDots[i].h)
        allsugar.push(sugar)
    } 
    
}

function draw() {
  background(220);
    textSize(23);
    stroke(15);
    fill("black");
    
text(score, 53, 60);    
    
    
    for (i in allwalls){
        pacman.collide(allwalls[i])
        for (j in allsugar){
            if (pacman.collide(allsugar[j])){
                allsugar[j].destroy()
                allsugar[j].visible = false
                score+=1
                if (score == 30) {
                    gameState = "win"
                    enemy1.destroy()
                    enemy2.destroy()
                    enemy3.destroy()
                    enemy4.destroy()
                }
                
                
        
                }
        }
    }
    
      
    if (pacman.collide(enemy1)||
    (pacman.collide(enemy2))||
    (pacman.collide(enemy3))||
    (pacman.collide(enemy4))){
        gameState = "game over"
        pacman.destroy()
        enemy1.destroy()
        enemy2.destroy()
        enemy3.destroy()
        enemy4.destroy()
        
        }
  drawSprites();
  playerControls();
  moveEnemies();
    
if (gameState == "game over"){
    showMessage()
}

if (gameState == "win") {
    textSize(23);
     stroke(15);
     fill("black");
     text("YOU WON", 270,230);
}

}

function playerControls(){
    if (keyDown("right")){
         pacman.x +=5
        }

    if (keyDown("left")){
         pacman.x -=5
        }

    if (keyDown("up")){
        pacman.y -=5
    }
    
    if (keyDown("down")){
        pacman.y +=5
    }
    
}

function moveEnemies() {
    
    enemy1.velocityX = vx1
    enemy2.velocityX = vx2
    enemy3.velocityX = vx3
    enemy4.velocityX = vx4
    
    if (enemy1.x>=650){
        vx1 =-2
    }
    if (enemy1.x<=70){
        vx1 =2
    }
    
    if (enemy2.x>=650){
        vx2 =-2
    }
    if (enemy2.x<=70){
        vx2 =2
    }
    
    if (enemy3.x>=650){
        vx3 =-2
    }
    if (enemy3.x<=70){
        vx3 =2
    }
    if (enemy4.x>=650){
        vx4 =-2
    }
    if (enemy4.x<=70){
        vx4 =2
    }
    
}

function showMessage(){
     textSize(23);
     stroke(15);
     fill("black");
     text("GAME OVER", 270,230);
}