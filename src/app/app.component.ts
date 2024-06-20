import { Component, OnInit } from '@angular/core';
import { SecretariaService } from './api.service';

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
  errorMessage: string = '';

  constructor(private secretariaService: SecretariaService) {}

  ngOnInit() {
    this.getSecretarias();
  }

  getSecretarias(): void {
    this.secretariaService.getSecretarias().subscribe({
      next: (data) => {
        this.secretarias = data;
        //console.log('Dados recebidos:', this.secretarias);       
      },
      error: (error) => {
        this.errorMessage = error;
        console.error('There was an error!', error);
      }
    });
  }
}
