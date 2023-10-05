import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/pages/login/login.component';
import { SinginComponent } from './shared/pages/singin/singin.component';
import { MainComponent } from './shared/pages/main/main.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'login', component: LoginComponent  },
  { path: 'singin', component: SinginComponent  },
  { path: 'home', component: MainComponent, canActivate: [AuthGuard] },
  { path: '**', component: LoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
