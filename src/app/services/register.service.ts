import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpError, DocumentType } from '../interface/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  urlCoink: string = environment.API_COINK;

  constructor(private httpClient: HttpClient) { }

  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que retorna un posible error al llamado de una peticion HTTP.
    * @param error Informacion del error
    * @returns Observable con la informacion del error
  */
  handleError(error: HttpErrorResponse): Observable<never> {
    const dataError: HttpError = { status: error.status, message: error.message };
    return throwError(() => dataError);
  }
  /**
    * @author Fabian Duran
    * @createdate 2024-03-21
    * Metodo que retorna los tipos de documentos registradas en el sistema.
    * @returns Observable con la respuesta HTTP realizada 
  */
  getTypesDocument(): Observable<DocumentType[]> {
    return this.httpClient.get<DocumentType[]>(`${this.urlCoink}documentTypes?apiKey=030106`).pipe(
      catchError(error => this.handleError(error))
    );
  }
}