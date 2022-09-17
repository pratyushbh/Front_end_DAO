import { Translate } from '@mui/icons-material';
import React from 'react'
import Sketch from 'react-p5'



function SS() {
    let sun

    let planet=[];
    let G=7;
    let destablize=0.5;
  const setup = (p5,canvasParentRef)=>{
      p5.createCanvas(500,500).parent(canvasParentRef);
      sun= new Body(p5, 100,p5.createVector(0,0),p5.createVector(0,0),'#ff00ff')
      for(var i=0;i<5;i++){
       let r= p5.random(sun.radius,200);
       let theta =p5.random(2*Math.PI);
       let planetPos= p5.createVector(r*Math.cos(theta),r*Math.sin(theta));
       let planetVel= planetPos.copy()
       planetVel.rotate(Math.PI/2);
       planetVel.mult(p5.random(1-destablize,1+destablize))
       console.log(planetVel);
       if(p5.random(1)>0.2){
           planetVel.mult(-1);
       }
       planetVel.setMag(Math.sqrt(G*sun.mass/planetPos.mag()));
        planet.push(new Body(p5,p5.random(10,25),planetPos,planetVel,'#fff'));
      }
  } 
  class Body{
      constructor(p5,_mass,_pos,_vel,color){
      let f;
      this.mass=_mass;
      this.pos=_pos;
      this.vel=_vel;
      this.radius= this.mass;
      this.path=[];
      this.show=()=> {
        p5.noStroke();
        p5.fill(color);
        p5.ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
        for(let i=0;i<this.path.length-2;i++){
            p5.stroke(255);
            p5.line(this.path[i].x,this.path[i].y,this.path[i+1].x,this.path[i+1].y);
        }
      };
      this.update=()=>{
          this.pos.x+=this.vel.x;

          this.pos.y+=this.vel.y;
          this.path.push(this.pos.copy());
          if(this.path.length > 100){
              this.path.splice(0,1)
          }
      }
      this.applyForce=(f)=>{
          this.vel.x+=f.x/this.mass;
          this.vel.y+=f.y/this.mass;
      }
      this.attract=(child)=>{
        let r= p5.dist(this.pos.x,this.pos.y,child.pos.x,child.pos.y);
        let f= this.pos.copy().sub(child.pos);
        f.setMag((G * this.mass * child.mass)/(r*r));
        child.applyForce(f);
      }
  }
}
  const draw= p5=>{
    p5.translate(250,250)
    p5.clear();
    p5.background(220,10);
    p5.ellipse(100,p5.createVector(100,0),p5.createVector(100,0))
    for(var i=0;i<planet.length;i++){
        planet[i].show();
        planet[i].update();
        sun.attract(planet[i]);
    }
    sun.show();
  }
  return (
    <div><Sketch setup={setup} draw={draw} /></div>
  )
}

export default SS;