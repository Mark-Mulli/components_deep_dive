import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css'
})
export class ServerDashboardComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}

  ngOnInit() {
    setInterval(() => {

      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown'
      }

    }, 3000)
  }
}
