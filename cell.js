
'use strict'

class Cell {
  constructor(game, location) {
    this.game = game;
    this.loc = location;
    this.occupied = 1;
    this.num = 0;
    this.vec = new JSVector(0,0);
  }

  render(){
    //  draw a rectangle at location
    if(this.occupied == -1){
      this.game.context.fillStyle = 'black';
    } else if(this.occupied == 1){
      this.game.context.fillStyle="#AABBAA";
      this.game.context.strokeStyle="#001122";
    }
    else if(this.occupied == 2){
      this.game.context.fillStyle = 'red';
    }
    else if(this.occupied == 3){
      this.game.context.fillStyle = 'blue';
    }
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
  }


}
