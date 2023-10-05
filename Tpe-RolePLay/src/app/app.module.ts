import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressBarComponent } from './shared/components/progress-bar/progress-bar.component';
import { MainComponent } from './shared/pages/main/main.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { SinginComponent } from './shared/pages/singin/singin.component';
import { GameCardComponent } from './shared/components/game-card/game-card.component';
import { SliderAccionComponent } from './shared/components/slider-accion/slider-accion.component';
import { SliderDeportesComponent } from './shared/components/slider-deportes/slider-deportes.component';
import { SliderPuzzleComponent } from './shared/components/slider-puzzle/slider-puzzle.component';
import { SliderCarrerasComponent } from './shared/components/slider-carreras/slider-carreras.component';
import { GameTabComponent } from './shared/pages/game-tab/game-tab.component';
import { ShareModalComponent } from './shared/components/share-modal/share-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    LoginComponent,
    SinginComponent,
    ProgressBarComponent,
    GameCardComponent,
    SliderAccionComponent,
    SliderDeportesComponent,
    SliderPuzzleComponent,
    SliderCarrerasComponent,
    GameTabComponent,
    ShareModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
