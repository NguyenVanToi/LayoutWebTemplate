import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Mushroom } from './mushroom';
import { Sensors } from './sensors';

@Injectable({
  providedIn: 'root'
})
export class MushroomService {
  private apiUrl="http://127.0.0.1:8000/api"


  constructor(private http: HttpClient, private messsageService: MessageService) { }

  //  Mushroom
  getMushroom(): Observable<Mushroom[]>{
    return this.http.get<Mushroom[]>(this.apiUrl + '/mushroom').pipe(
      tap(_=>this.log('fetched Mushroom')),
      catchError(this.handleError<Mushroom[]>('getMushroom', []))
    );
  }

  // Sensor
  getSensors(): Observable<Sensors[]> {
    return this.http.get<Sensors[]>(this.apiUrl +'/sensor').pipe(
      tap(_=>this.log('fetched Sensors')),
      catchError(this.handleError<Sensors[]>('getSensors', []))
    );
  } 

  private log(message:string) {
    this.messsageService.add("Service: ${message}")
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error:any): Observable<T> => {
      console.log(error);
      this.log("${operation} failed: ${error.message}");
      return of(result as T);
    }
  }

}
