// #docregion
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HEROES } from '../app/pipe/impure-pipe.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['#flyers, #all {font-style: italic}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'Flying Heroes (impure pipe)';
  heroes: {name:string , canFly:boolean}[] = [];
  canFly = true;
  mutate = true;
  constructor() {
    this.reset();
  }

  purePipe: boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    let hero = { name, canFly: this.canFly };
    if (this.mutate) {
      // Pure pipe won't update display because heroes array reference is unchanged
      // Impure pipe will display
      this.heroes.push(hero);
      console.log(this.heroes , 'mutate');
    } else {
      // Pipe updates display because heroes array is a new object
      this.heroes = this.heroes.concat(hero);
      console.log(this.heroes);
    }
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}
