import { Component } from '@angular/core';
// 👇 1. Ye line mein 'RouterLink' aur 'RouterLinkActive' add karo
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // 👇 2. Is 'imports' array mein bhi add karo
  imports: [RouterOutlet, RouterLink, RouterLinkActive], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ... tumhara baki code
}