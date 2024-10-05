import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-sticket-dashboard',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './sticket-dashboard.component.html',
  styleUrl: './sticket-dashboard.component.css'
})
export class SticketDashboardComponent {

}
