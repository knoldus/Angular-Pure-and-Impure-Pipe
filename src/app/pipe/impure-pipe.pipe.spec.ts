import {  FlyingHeroesImpurePipe } from './impure-pipe.pipe';

describe('ImpurePipePipe', () => {
  it('create an instance', () => {
    const pipe = new  FlyingHeroesImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
