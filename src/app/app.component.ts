import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerDashboardComponent } from "./dashboard/server-dashboard/server-dashboard.component";
import { TrafficDashboardComponent } from "./dashboard/traffic-dashboard/traffic-dashboard.component";
import { SticketDashboardComponent } from "./dashboard/sticket-dashboard/sticket-dashboard.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerDashboardComponent, TrafficDashboardComponent, SticketDashboardComponent, DashboardItemComponent],
})
export class AppComponent {


}
