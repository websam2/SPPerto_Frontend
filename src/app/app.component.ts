import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Link {
  url: string;
  name: string;
}

interface Secretaria {
  id: number;
  nome: string;
  telefone: string;
  logo: string;
  links: Link[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  secretarias: Secretaria[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSecretarias();
  }

  getSecretarias(): void {
    this.http.get<Secretaria[]>('assets/secretarias.json').subscribe((data) => {
      this.secretarias = data.map(secretaria => ({
        ...secretaria,
        links: secretaria.links.filter(link => link.url)  // Filtra links vazios
      }));
    });
  }
}