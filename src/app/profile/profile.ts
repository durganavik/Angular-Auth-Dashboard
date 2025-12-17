import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Ye zaroori hai *ngIf ke liye

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule], // 👈 Import add karo
  template: `
    <div style="text-align: center; margin-top: 50px;">
      <h1>User Profile</h1>
      
      <!-- Agar user mil gaya toh ye dikhao -->
      <div *ngIf="currentUser">
        <h2 style="color: blue;">Name: {{ currentUser.name }}</h2>
        <h3>Email: {{ currentUser.email }}</h3>
        <p>User ID: {{ id }}</p>
      </div>

      <!-- Agar user nahi mila (Galat ID) -->
      <div *ngIf="!currentUser" style="color: red;">
        <h3>❌ User nahi mila bhai! (ID: {{ id }})</h3>
      </div>

      <a href="/home" style="display: inline-block; margin-top: 20px;">⬅ Back to Home</a>
    </div>
  `
})
export class Profile implements OnChanges {
  @Input() id!: string;
  
  currentUser: any = null; // Yahan user ka data store hoga

  // Nakli Database (Asli app mein ye server se aata hai)
  users = [
    { id: '1', name: 'Amit Sharma', email: 'amit@test.com' },
    { id: '2', name: 'Rahul Verma', email: 'rahul@test.com' },
    { id: '99', name: 'Pooja Singh', email: 'pooja@test.com' }
  ];

  // Jab bhi ID change hogi, ye function chalega
  ngOnChanges() {
    // Database mein se us ID wala user dhoondo
    this.currentUser = this.users.find(u => u.id === this.id);
  }
}