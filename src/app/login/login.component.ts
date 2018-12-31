import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target
    const password = target.querySelector('#Password').value
    const username = target.querySelector('#Username').value
    this.Auth.getUserDetails(username, password).subscribe( data => {
      if(data.success){
        this.router.navigate(['admin'])
        this.Auth.setLoggedIn(true)
      }else{
        alert(data.message)
      }
    })
    console.log(username,password)
  }

}
