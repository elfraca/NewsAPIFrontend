import { Component , OnInit} from '@angular/core';
import { TopNewsService } from 'src/app/services/topnews.service';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { Item } from "../../models";

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  page = 1;
  pageSize = 10;
  displayedColumns: string[] = [ 'title', 'url', 'by'];
  items: Item[] = [];
  dataSource: any;

  constructor(private topNewsService: TopNewsService){}

  ngOnInit(): void {
      this.GetTopNews();
  }

  GetTopNews(){
    console.log('antes de promesa')
    this.topNewsService.GetTopNews(1,10).subscribe( items => {
      this.dataSource = new MatTableDataSource(items);
      console.log(this.dataSource);
      return items;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
