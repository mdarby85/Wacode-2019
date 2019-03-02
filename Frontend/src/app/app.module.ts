import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IssueService } from './issue.service';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
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
    AppRoutingModule,
<<<<<<< HEAD
=======
    AngularFontAwesomeModule
>>>>>>> 3ac434ffc5ce41dea84c5b0997157eab210f03ef
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
