import { Injectable } from '@angular/core';
import { Card } from './card';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl:string = environment.apiUrl
  route:string = "question"
  constructor(private httpClient:HttpClient) {
    
   }

  getCard():Observable<Card>{
   return this.httpClient.get<Card>(this.apiUrl + this.route)
  }

  getMultipleCards():Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.apiUrl + this.route+"s")
  }

  createCard(card:Card):Observable<void>{
    return this.httpClient.post<void>(this.apiUrl + this.route, card)
  }

  updateCard(card:Card):Observable<void>{
    return this.httpClient.patch<void>(this.apiUrl+this.route, card)
  }



}
