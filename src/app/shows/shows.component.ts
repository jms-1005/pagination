import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Show } from '../interfaces';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows:Show[] = [];
  currentPage = 1;
  totalPages = 0;
  showLoadBtn = true;
  loading = false;
  constructor(private cs:CommonService) { }

  loadMore(){
    this.loading = true;
    this.currentPage = this.currentPage + 1;
    this.cs.getShows(this.currentPage).subscribe( res =>{

      for(let i=0; i<res.data.length; i++){
        this.shows.push(res.data[i]);
      }

      this.loading = false;
    })
    if(this.currentPage === this.totalPages){
      this.showLoadBtn = false;
    }
  }

  ngOnInit(): void {
    this.cs.getShows(1).subscribe( res => {
      this.shows = res.data;
      this.totalPages = res.meta.pagination.pageCount;
    })
  }

}
