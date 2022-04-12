import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: Flyer[]) {
    return allHeroes.filter(hero => hero.canFly);
  }
}
// it detect every change     { change pure false to ture then it will detect only pure change mean when new reference created }
@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {

}





export interface Flyer { name:string, canFly: boolean; }
export const HEROES =  [
  {name: 'Superman', canFly: true},
  {name: 'Ironman',  canFly: true},
  {name: 'Magneto',   canFly: false},
  {name: 'Tornado',   canFly: true}
];
