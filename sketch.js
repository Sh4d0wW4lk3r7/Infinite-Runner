var bg,pl,g,flag,r,bgi,x1,x2,w,ogrp,sc,gs,d,os,oimg

function preload() {
  bg = loadImage("Background.png");
  r=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png")
  gca=loadAnimation("gc1.png","gc2.png","gc3.png","gc4.png","gc5.png","gc6.png","gc7.png","gc8.png","gc9.png")
 d=loadAnimation("Dead (1).png","Dead (2).png","Dead (3).png","Dead (4).png","Dead (5).png","Dead (6).png","Dead (7).png","Dead (8).png","Dead (9).png",)
 d.looping=false
  bgi=loadImage("c.jpg")
  oimg=loadImage("obstc.png")
}


function setup() {
  createCanvas(1000, windowHeight + 2);
  pl = createSprite(100, height - 80, 50, 50);
w=createSprite(-50,height-100,20,100)
ogrp=new Group()
os=-3
sc=0
gs=0
  x1=0
  x2=width
  g= createSprite(100,height-30,100,10)
  g.visible=false
  flag=0
  pl.addAnimation("run",r)
  pl.addAnimation("dead",d)
  pl.scale=0.25
  pl.setCollider("rectangle",0,0,190,400)
  sp=new Group()
}

function draw() {
  background(30);
  image(bgi,x1,0,width,height)
  image(bgi,x2,0,width,height)
  if(gs==0){
    x1-=8
    x2-=8
    spawnobstacles()
  if (keyDown("up")) {
    pl.y -= 5;
    pl.velocityY=-11
    flag=1
  }
  pl.velocityY+=0.6
  if(pl.collide(g)){
  
  }
  if(w.overlap(ogrp,fm))
  {
    if(sc% 1==0){
    os-=1  
    }
  }
  if(pl.collide(ogrp)){
  gs=1
  }
  }
  else{
ogrp.setVelocityXEach(0)
pl.setVelocity(0,0)
pl.changeAnimation("dead")
fill("red")
textSize(50)
text("GaMe OvEr",windowWidth/2,windowHeight/2)
  }
 
  if(x1<-width){
  x1=width+x2  
  }
  if(x2<-width){
    x2=width+x1  
    }
  pl.overlap(sp,collectcoin) 
  drawSprites();
  fill("red");
  textSize(25)
  text(sc,50,50)
}

function check(p,g){
if(p.y<g.y){
p.collide(g) 
flag=0   
}  
}
function collectcoin(p,c){
  c.remove()
}
function drawcoins(x,y,ct){
  for(var i=0;i<ct;i++){
  e=createSprite(x+(40*i),y,20,20)
  e.addAnimation("coin",gca)
  e.scale=0.07
  sp.add(e)}  
}
function spawnobstacles(){
if(frameCount% 180==0){
var o=createSprite(width,height-40) 
o.addImage(oimg) 
o.scale=0.2
o.velocityX=os
ogrp.add(o)
o.setCollider("rectangle",0,0,150,150)
}  

}
function fm(w,o){
o.remove()  
sc+=1
}