import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-secretarias',
  templateUrl: './secretarias.component.html',
  styleUrls: ['./secretarias.component.css']
})
export class SecretariasComponent implements OnInit {
  secretarias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadSecretarias();
  }

  loadSecretarias(): void {
    this.http.get<any[]>('assets/secretarias.json').subscribe(data => {
      this.secretarias = data;
    });
  }
}




// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-secretarias',
//   templateUrl: './secretarias.component.html',
//   styleUrls: ['./secretarias.component.css'],
// })
// export class SecretariasComponent implements OnInit {

//   @Input() secretaria: string;
//   @Input() link: string;
  
//   secretarias: any[] = [];
//   secretariaFiltrada: any;

//   constructor(private http: HttpClient) {
//     this.secretaria = '';
//     this.link = '';
//   }

//   ngOnInit() {
//     this.getSecretarias();
//   }

//   getSecretarias() {
//     this.http.get<any[]>('assets/secretarias.json').subscribe((data) => {
//       this.secretarias = data;
//       this.secretariaFiltrada = this.secretarias.find(
//         (secretaria) => secretaria.id === 1
//       );
//     });
//   }

//   getLinks(secretaria: any): string[] {
//     return [
//       secretaria.link_1,
//       secretaria.link_2,
//       secretaria.link_3,
//       secretaria.link_4,
//       secretaria.link_5,
//     ].filter((link) => link);
//   }
// }
