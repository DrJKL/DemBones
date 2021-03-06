import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GameService, ]
})
export class AppComponent {
  constructor(public game:GameService) {
    game.rollDice();
  }
  title = 'app works!';
}
