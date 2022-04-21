import { Component, OnInit } from '@angular/core';
import { BreadcrumbLinkItem } from '../breadcrumb.interface'
import { TableAdapter, TableField } from '../table.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public rowData: any;
  public parent: string = 'Test Route';
  public child: BreadcrumbLinkItem[] = [
    {
      title: 'Home',
      link: '/home'
    },
    {
      title: 'About',
      link: '/about'
    },
    {
      title: 'Contact',
      link: '/contact'
    
  }];
  public tableAdapter : TableAdapter[] = [
    {
      columnTitle: 'Id',
      field: 'id',
      type: 'number'
    },
    {
      columnTitle: 'Deductible',
      field: 'deductible',
      type: 'number'
    },
    {
      columnTitle: 'Created At',
      field: 'created_at',
      type: 'string'
    }
  ];
  public tableFields: TableField[] = [
    {
      id: 1,
      deductible: 100,
      created_at: '2020-01-01',
    },
    {
      id: 2,
      deductible: 200,
    },
    {
      id: 2,
      deductible: 300,
      created_at: '2020-02-02',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  public RowClickEvent(event: any): void {
    this.rowData = event;
  }


}
