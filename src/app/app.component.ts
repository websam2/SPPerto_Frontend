import { Component } from '@angular/core';

interface Selection {
  title: string;
  links: number[]; 
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selections: Selection[] = [
    { title: 'Secretaria 1', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 2', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 3', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 4', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 5', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 6', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 7', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 8', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 9', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 10', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 11', links: [1, 2, 3, 4, 5, 6] },
    { title: 'Secretaria 12', links: [1, 2, 3, 4, 5, 6] },
  ];
}
