import { Component } from '@angular/core';

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
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria', links: [1, 2, 3, 4, 5, 6] },
  ];
}
