import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { UserApiService } from './user-api.service';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userSub: Subscription;
  user: User;

  constructor(private userApi: UserApiService) {

  }

  ngOnInit() {
    this.userSub = this.userApi
      .getUser()
      .subscribe(res => {
        this.user = res;
      },
      console.error
    );
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  
}
