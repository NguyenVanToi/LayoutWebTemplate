import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs';
import { Mushroom } from './mushroom';

@Injectable({
  providedIn: 'root'
})
export class MushroomService {
  private apiUrl="http://127.0.0.1:8000/api"
  // private mushroom: Mushroom[] = []; 
  // mushroom: any;

  constructor(private http: HttpClient, private messsageService: MessageService) { }

  getMushroom(): Observable<Mushroom[]>{
    return this.http.get<Mushroom[]>(this.apiUrl + '/mushroom');
  }


}
