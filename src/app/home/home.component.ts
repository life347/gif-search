import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private fragment: string;

  text = '';
  images;

  constructor(private router: Router, private route: ActivatedRoute, private data: DataService) {
  }

  search() {
    if (this.text !== '') {

      this.scrollIntoView('result');

      this.data.searchGif(this.text).subscribe((data: any) => {
        this.images = data.data;
        console.log(this.images);
      });

    }
  }

  ngOnInit() {

    this.data.trendinghGif().subscribe((res: any) => {
      this.images = res.data;
      console.log(this.images);
    });
  }

  scrollIntoView(anchorHash) {
    setTimeout(() => {
      const anchor = document.getElementById(anchorHash);
      if (anchor) {
        anchor.focus();
        anchor.scrollIntoView();
      }
    });
  }

}
