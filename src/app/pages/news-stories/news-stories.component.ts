import { Component , OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { NewsStoriesService } from 'src/app/services/newsstories.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Item } from "../../models";
import { SearchResponse } from "../../models";
import { SearchRequest} from "../../models";

@Component({
  selector: 'app-news-stories',
  templateUrl: './news-stories.component.html',
  styleUrls: ['./news-stories.component.css']
})
export class NewsStoriesComponent implements OnInit {

  pageSize = 10;
  length = 10;
  pageIndex = 0;
  pageSizeOptions = [10, 15 ,30];
  filterValue = "";
  displayedColumns: string[] = [ 'title', 'url', 'by'];
  items: Item[] = [];
  data: SearchResponse = { data: [], totalPages: 0}
  dataSource: any;
  searchRequest: SearchRequest = {
    page: 0,
    pageSize: 10,
    searchTerm: ""
  };

  constructor(private NewsStoriesService: NewsStoriesService,){}

  ngOnInit(): void {
      this.GetTopNews();
  }


  GetTopNews(){
    this.NewsStoriesService.GetNewsStories(this.searchRequest).subscribe( data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.totalPages
    });
  }


  applyFilter(event: Event) {
    console.log("disparo");
    this.filterValue = (event.target as HTMLInputElement).value;
    this.searchRequest.searchTerm = this.filterValue.trim().toLowerCase();
    console.log(this.searchRequest.searchTerm);
    this.NewsStoriesService.GetNewsStories(this.searchRequest).subscribe( data => {
      console.log("dentro del servicio")
      console.log(data.data);
      console.log(data.totalPages);
      this.length = data.totalPages
      this.dataSource = new MatTableDataSource(data.data);
    });
  }

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.searchRequest.page = e.pageIndex;
    this.searchRequest.pageSize = e.pageSize;
    this.searchRequest.searchTerm = this.filterValue;
    this.NewsStoriesService.GetNewsStories(this.searchRequest).subscribe( data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.length = data.totalPages
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
