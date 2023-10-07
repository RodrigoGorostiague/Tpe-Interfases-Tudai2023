import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { SinginComponent } from './shared/pages/singin/singin.component';
import { MainComponent } from './shared/pages/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { GameTabComponent } from './shared/pages/game-tab/game-tab.component';
import { SliderDeportesComponent } from './shared/components/slider-deportes/slider-deportes.component';
import { SliderCarrerasComponent } from './shared/components/slider-carreras/slider-carreras.component';
import { SliderAccionComponent } from './shared/components/slider-accion/slider-accion.component';
import { SliderPuzzleComponent } from './shared/components/slider-puzzle/slider-puzzle.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'singin', component: SinginComponent  },
  { path: 'home', component: MainComponent, canActivate: [AuthGuard], children: [
    { path: 'deportes', component: SliderDeportesComponent },
    { path: 'carreras', component: SliderCarrerasComponent },
    { path: 'accion', component: SliderAccionComponent },
    { path: 'puzzle', component: SliderPuzzleComponent }
  ]},
  { path: '4-en-linea', component: GameTabComponent, canActivate: [AuthGuard]},
  { path: '**', component: LoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
