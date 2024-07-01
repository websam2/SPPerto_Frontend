import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-spperto',
  templateUrl: './spperto.component.html',
  styleUrls: ['./spperto.component.css']
})
export class SppertoComponent implements OnInit, OnDestroy {
  currentDateTime: string = '';
  private intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    this.intervalId = setInterval(() => this.updateDateTime(), 1000); // Atualiza a cada segundo
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateDateTime(): void {
    const brasiliaTime = moment().tz('America/Sao_Paulo');
    this.currentDateTime = brasiliaTime.format('DD/MM/YYYY HH:mm:ss');
  }
}
