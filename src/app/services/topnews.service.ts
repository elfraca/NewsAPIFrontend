import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  private baseUrl = 'https://localhost:7193/api/';

  constructor( private httpClient: HttpClient) { }

  GetTopNews(page: number, pageSize: number){
    const url =  `${this.baseUrl}Items?page=${page}&pageSize=${pageSize}`;;
    return this.httpClient.get<Item[]>(url)
    .pipe(
      map(response => {
        return response
      })
    );
  }


}
