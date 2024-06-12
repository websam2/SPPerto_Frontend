import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {
  private jsonURL = 'assets/secretarias.json';

  constructor(private http: HttpClient) {}

  getSecretarias(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

//   constructor(private http: HttpClient) { }

//   getData(): Observable<any> {
//     return this.http.get(this.apiUrl).pipe(
//       map(response => response),
//       catchError(this.handleError)
//     );
//   }

//   private handleError(error: HttpErrorResponse) {
//     let errorMessage = 'Unknown error!';
//     if (error.error instanceof ErrorEvent) {
//       errorMessage = `Erro do lado do cliente: ${error.error.message}`;
//     } else {
//       errorMessage = `Erro do lado do servidor: ${error.status} ${error.message}`;
//     }
//     console.error(errorMessage);
//     return throwError(errorMessage);
//   }
// }



