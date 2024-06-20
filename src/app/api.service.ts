import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {

  private apiUrl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient) { }

  getSecretarias(): Observable<any> {
    
    return this.http.get<any>(this.apiUrl).pipe(
    
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro do lado do cliente: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Erro do lado do servidor: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class SecretariaService {
//   private jsonURL = 'assets/secretarias.json';

//   constructor(private http: HttpClient) {}

//   getSecretarias(): Observable<any> {
//     return this.http.get(this.jsonURL);
//   }
// }




