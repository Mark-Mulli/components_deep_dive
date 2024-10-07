import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-dashboard.component.html',
  styleUrl: './server-dashboard.component.css'
})
export class ServerDashboardComponent implements OnInit {
  currentStatus= signal< 'online' | 'offline' | 'unknown' >('online');

  // private interval ?: ReturnType<typeof setInterval>

  private destroyRef = inject(DestroyRef)


  constructor() {
    effect(() => {
      console.log(this.currentStatus())
    })

  }


  ngOnInit() {
    const interval = setInterval(() => {

      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus.set('online')
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline')
      } else {
        this.currentStatus.set('unknown')
      }

    }, 3000)

    this.destroyRef.onDestroy(() => {
      clearTimeout(interval)
    })
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval)
  // }
}
