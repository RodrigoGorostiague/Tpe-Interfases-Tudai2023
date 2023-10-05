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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    MenuComponent,
    LoginComponent,
    SinginComponent,
    ProgressBarComponent
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
