import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-spperto',
  templateUrl: './spperto.component.html',
  styleUrls: ['./spperto.component.css']
})
export class SppertoComponent implements OnInit {
  currentDateTime: string = '';

  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => this.updateDateTime(), 1000); // Atualiza a cada segundo
  }

  updateDateTime(): void {
    const brasiliaTime = moment().tz('America/Sao_Paulo');
    this.currentDateTime = brasiliaTime.format('DD/MM/YYYY HH:mm:ss');
  }
}

