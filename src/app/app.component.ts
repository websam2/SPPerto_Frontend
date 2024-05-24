import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

interface Link {
  title: string;
  links: number[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  links: Link[] = [
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Nome', links: [1, 2, 3, 4, 5, 6] },
  ];
//   currentDate: string;

//   constructor(private datePipe: DatePipe) {}

//   ngOnInit() {
//     // Initialize currentDate in the constructor
//     this.currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss', 'BRT');
//   }
}

