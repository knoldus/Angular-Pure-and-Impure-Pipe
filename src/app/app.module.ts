import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlyingHeroesImpurePipe } from './pipe/impure-pipe.pipe';
import { PureHeroPipePipe } from './pipe/pure/pure-hero-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlyingHeroesImpurePipe,
    PureHeroPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
