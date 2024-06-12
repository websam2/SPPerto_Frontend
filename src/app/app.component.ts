import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  secretarias: any[] = [];
  secretariaFiltrada: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSecretarias();
  }

  getSecretarias() {
    this.http.get<any[]>('assets/secretarias.json').subscribe((data) => {
      this.secretarias = data;
      this.secretariaFiltrada = this.secretarias.find(
        (secretaria) => secretaria.id === 1
      );
    });
  }

  getLinks(secretaria: any): string[] {
    return [
      secretaria.link_1,
      secretaria.link_2,
      secretaria.link_3,
      secretaria.link_4,
      secretaria.link_5,
    ].filter((link) => link);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { ApiService } from './api.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   data: any;
//   errorMessage: string = '';

//   constructor(private apiService: ApiService) {}

//   ngOnInit(): void {
//     this.apiService.getData().subscribe(
//       (response) => this.data = response,
//       (error) => this.errorMessage = error
//     );
//   }
// }
