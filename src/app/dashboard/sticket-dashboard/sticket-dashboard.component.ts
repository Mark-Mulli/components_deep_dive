import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { ticket } from '../../shared/ticket.model';

@Component({
  selector: 'app-sticket-dashboard',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './sticket-dashboard.component.html',
  styleUrl: './sticket-dashboard.component.css'
})
export class SticketDashboardComponent {

  tickets: ticket[] = []

  onAdd(ticketdata: {title: string, text:string}) {
    const ticket: ticket = {
      title: ticketdata.title,
      request: ticketdata.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket)

  }
}
