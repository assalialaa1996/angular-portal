import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//Endpoint
const endpoint = 'http://localhost:4000/api/article/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {
     };
  }

  getArticles(x): Observable<any> {
    return this.http.get(endpoint+'?page='+x).pipe(
      map(this.extractData));
  }

  getArticle(id): Observable<any> {
    return this.http.get(endpoint + 'one/' + id).pipe(
      map(this.extractData));
  }
  
  addArticle (art): Observable<any> {
   // console.log(art);
    return this.http.post<any>(endpoint , JSON.stringify(art), httpOptions).pipe(
      tap((job) => console.log(`added article w/ id=${art._id}`)),
      catchError(this.handleError<any>('addArticel'))
    );
  }

  deleteArticle (id): Observable<any> {
    return this.http.delete<any>(endpoint, httpOptions).pipe(
      tap(_ => console.log(`deleted articel id=${id}`)),
      catchError(this.handleError<any>('deleteArticel'))
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
 