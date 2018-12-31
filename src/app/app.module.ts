import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }  from '@angular/router' ;
import { HttpClientModule } from '@angular/common/http' ;
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard'
import { LogoutComponent } from './logout/logout.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: '',
        component: HomeComponent
      },
    ])
  ],
  providers: [AuthService,UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
