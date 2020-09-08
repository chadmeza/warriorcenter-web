import { Component, OnInit } from '@angular/core';
import { Event } from './event.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((result) => {
      this.events = result.events;
    });
  }

  getDateDay(eventDate: Date) {
    const options = { day: '2-digit' };

    return new Date(eventDate).toLocaleDateString(undefined, options);
  }

  getDateMonth(eventDate: Date) {
    const options = { month: 'short' };

    return new Date(eventDate).toLocaleDateString(undefined, options).toUpperCase();
  }

  getLineOneFromAddress(address: string) {
    let parsedAddress = address.split(',');
    return parsedAddress[0];
  }

  getLineTwoFromAddress(address: string) {
    let parsedAddress = address.split(', ');
    let lineTwo = '';

    if (parsedAddress.length > 1) {
      for (let i = 0; i < parsedAddress.length; i++) {
        if (i == 0) {
          continue;
        }

        if (i == parsedAddress.length - 1) {
          lineTwo += parsedAddress[i];
        } else {
          lineTwo += parsedAddress[i] + ', ';
        }
      }
    }

    return lineTwo;
  }

}
