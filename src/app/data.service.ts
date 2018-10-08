import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ApiKey = 'g14NekHsYrXxdSDIB3V7j73lq9Mq0gTA';

  constructor(private http: HttpClient) { }

  searchGif(keyword) {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=' + this.ApiKey + '&q=' + keyword + '&limit=25&offset=0&rating=G&lang=en';

    return this.http.get(url);
  }

  trendinghGif() {

    const url = 'https://api.giphy.com/v1/gifs/trending?api_key=' + this.ApiKey + '&limit=25&rating=G';

    return this.http.get(url);
  }

}
