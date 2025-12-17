import { Component } from '@angular/core';

@Component({
   standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   // Ye variable HTML mein dikhega
  counter = 0;

  // Ye function button dabane pe chalega
  increaseCount() {
    this.counter++;
  }
  
  resetCount() {
    this.counter = 0;
  }
}


