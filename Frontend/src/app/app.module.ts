import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BottombarComponent } from './components/bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    RoutingComponents,
    BottombarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
