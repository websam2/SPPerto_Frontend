import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

interface Link {
  title: string;
  links: number[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Erro ao carregar os dados', error);
      }
    );
  }
}
