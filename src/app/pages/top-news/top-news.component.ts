import { Component , OnInit} from '@angular/core';
import { TopNewsService } from 'src/app/services/topnews.service';
import { MatTableDataSource, MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-top-news',
  templateUrl: './top-news.component.html',
  styleUrls: ['./top-news.component.css']
})
export class TopNewsComponent implements OnInit {
  page = 1;
  pageSize = 10;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource();

  constructor(private topNewsService: TopNewsService){}

  ngOnInit(): void {
      this.GetTopNews();
  }

  GetTopNews(){
    console.log('antes de promesa')
    this.topNewsService.GetTopNews(1,10).subscribe( items => {
      console.log(items);
      return items;
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
