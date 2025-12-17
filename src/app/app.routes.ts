// app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about'; // Import check kar lena
import { Register } from './register/register';
import { Login } from './login/login';
import { Profile } from './profile/profile';

export const routes: Routes = [
  
  // 👇 Ye sabse important line hai (Magic Line) 
  // Iska matlab: Agar koi sirf 'localhost:4200' khole, toh usko 'home' pe phek do
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 

  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'profile', component: Profile },
   { path: 'user/:id', component: Profile }

];