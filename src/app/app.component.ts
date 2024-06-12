import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  secretarias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSecretarias();
  }

  getSecretarias(): void {
    this.http.get<any[]>('assets/secretarias.json').subscribe((data) => {
      this.secretarias = data;
    });
  }
}
