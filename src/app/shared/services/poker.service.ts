import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Poker } from '@shared/interfaces/poker.interface';

@Injectable({
  providedIn: 'root'
})
export class PokerService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Poker[]> {
    return this.http.get<Poker[]>(environment.backendUrl);
  }

  public delete(id: string): Observable<Poker> {
    return this.http.delete<Poker>(`${environment.backendUrl}/${id}`);
  }

  public add(Poker: Poker): Observable<Poker> {
    return this.http.post<Poker>(environment.backendUrl, Poker);
  }

  public update(Poker: Partial<Poker>): Observable<Poker> {
    return this.http.put<Poker>(`${environment.backendUrl}`, Poker);
  }
}
