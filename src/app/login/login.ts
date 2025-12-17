import { Component,inject } from '@angular/core';
// 👇 1. Ye import zaroori hai
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  // 👇 2. Isko imports array mein daalo (Bhulna mat!)
  imports: [ReactiveFormsModule], 
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Router ko inject karo taaki page badal sakein
  private router = inject(Router); 

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.loginForm.valid) {
      alert('Login Success! Home page par ja rahe hain... 🚀');
      
      // 👇 Ye line magic karegi (User ko Home pe bhej degi)
      this.router.navigate(['/home']); 
      
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}