import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../impure-pipe.pipe';

@Pipe({
  name: 'pureHeroPipe',
  pure :true
})
export class PureHeroPipePipe implements PipeTransform {

  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }

}
