import { Component } from '@angular/core';
// 👇 1. Ye import line add karo
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  // 👇 2. Is 'imports' array mein 'RouterLink' daal do
  imports: [RouterLink], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  // ... tumhara code
}