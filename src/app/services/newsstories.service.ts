import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../models';
import { SearchRequest } from '../models/SearchRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsStoriesService {

  private baseUrl = 'https://localhost:7193/api/';

  constructor( private httpClient: HttpClient) { }

  GetNewsStories(searchRequest: SearchRequest):Observable<any>{
    const url =  `${this.baseUrl}Items/paged-search`;
    return this.httpClient.post<any[]>(url, searchRequest)
    .pipe(
      map(response => {
        return response
      })
    );
  }


}
