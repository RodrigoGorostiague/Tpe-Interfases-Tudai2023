import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/pages/main/main.component';
import { LoginComponent } from './shared/components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent  },
  { path: 'home', component: MainComponent  },
  { path: '**', component: LoginComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
