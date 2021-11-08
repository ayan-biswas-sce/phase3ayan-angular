import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;
  //private authStatusSubs: Subscription;
  username: string;
  password: string;
  private router: Router
  //constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("Login");
    // this.authStatusSubs = this.authService.getAuthStatusListener()
    //   .subscribe(authStatus => {
    //     this.isLoading = false;
    //   });
  }

  //onSubmit() {
    //this.router.navigate(['http://localhost:8080']);
    //this.isLoading = true;
    //this.authService.login(this.username, this.password);
  //}

  ngOnDestroy(): void {
    //this.authStatusSubs.unsubscribe();
  }
}
