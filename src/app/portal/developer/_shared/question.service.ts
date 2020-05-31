import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

//Endpoint
const endpoint = 'http://localhost:4000/api/question/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { 

  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getQuestions(x): Observable<any> {
    return this.http.get(endpoint+'?page='+x).pipe(
      map(this.extractData));
  }

//WorkingOnIt
  getQuestion(id): Observable<any> {
    return this.http.get(endpoint + 'one/' + id).pipe(
      map(this.extractData));
  }

  addQuestion (question): Observable<any> {
    console.log(question);
    return this.http.post<any>(endpoint , JSON.stringify(question), httpOptions).pipe(
      tap((question) => console.log(`added question w/ id=${question._id}`)),
      catchError(this.handleError<any>('addQuestion'))
    );
  }

  updateQuestion (id, question): Observable<any> {
    return this.http.put(endpoint +  + id, JSON.stringify(question), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteQuestion (id): Observable<any> {
    return this.http.delete<any>(endpoint, httpOptions).pipe(
      tap(_ => console.log(`deleted question id=${id}`)),
      catchError(this.handleError<any>('deleteQuestion'))
    );
  }

  

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  
  
}
