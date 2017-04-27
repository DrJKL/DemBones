import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public currentRoll:number[] = [];
  private dicePool: number[] = [6, 6, 6];

  constructor() { }

  rollDice() {
    this.currentRoll = [];
    this.dicePool.forEach((max) => {
      this.currentRoll.push(this.rollSingleDie(max));
    });
  }

  total() {
    return this.currentRoll.reduce((prev,cur) => prev + cur, 0);
  }

  rollSingleDie(max:number) {
    return Math.ceil(Math.random() * 6);
  }

}
