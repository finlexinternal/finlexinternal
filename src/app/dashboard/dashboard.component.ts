import { Component, OnInit } from '@angular/core';
import { BreadcrumbLinkItem } from '../breadcrumb.interface'

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
  constructor() { }

  ngOnInit(): void {
  }
  public RowClickEvent(event: any): void {
    this.rowData = event;
  }


}
