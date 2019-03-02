import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IssueService } from './issue.service';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './pages/signup/signup.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
