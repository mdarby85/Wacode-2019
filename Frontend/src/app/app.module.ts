import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IssueService } from './issue.service';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    RoutingComponents,
    BottombarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
