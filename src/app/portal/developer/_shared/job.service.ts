import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//Endpoint
const endpoint = 'http://localhost:4000/api/job/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getJobs(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getJob(id): Observable<any> {
    return this.http.get(endpoint + 'products/' + id).pipe(
      map(this.extractData));
  }
  
  addJob (job): Observable<any> {
    console.log(job);
    return this.http.post<any>(endpoint , JSON.stringify(job), httpOptions).pipe(
      tap((job) => console.log(`added job w/ id=${job._id}`)),
      catchError(this.handleError<any>('addJob'))
    );
  }

  deleteJob (id): Observable<any> {
    return this.http.delete<any>(endpoint, httpOptions).pipe(
      tap(_ => console.log(`deleted job id=${id}`)),
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
