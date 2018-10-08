import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  images;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => {
      this._searchGif(params.keyword);
    });
  }

  _searchGif(keyword) {
    this.data.searchGif(keyword).subscribe((data: any) => {
      this.images = data.data;
      console.log(this.images);
    });
  }

  ngOnInit() {
  }

}
