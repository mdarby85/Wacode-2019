import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IssueService } from './issue.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserApiService } from './user-api.service';

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
    AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [IssueService, UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
