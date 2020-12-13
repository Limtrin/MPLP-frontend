import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Product {
  id: number;
  name: string;
  price: number;
  instock: boolean;
}

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.sass']
})
export class TestTableComponent implements OnInit {

  dataSource: Product[]
  displayedColumns: Array<string>

  constructor(
    private http: HttpClient
  ) {
    this.dataSource = []
    this.displayedColumns = ['id', 'name', 'price', 'instock']
  }

  ngOnInit(): void {
    this.http.get(environment.api_url + '/products')
      .subscribe((data: any) => {
        this.dataSource = data
      })
  }

}
