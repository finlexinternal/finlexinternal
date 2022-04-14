import { Component, Input, OnInit } from '@angular/core';
import { BreadcrumbLinkItem } from '../breadcrumb.interface';

@Component({
  selector: 'finlex-breadcrumb',
  templateUrl: './finlex-breadcrumb.component.html',
  styleUrls: ['./finlex-breadcrumb.component.scss']
})
export class FinlexBreadcrumbComponent implements OnInit {
  @Input() root: string = 'Parent Route';
  @Input() child: BreadcrumbLinkItem[] = [
    {
      title: 'Current Route',
      link: '/'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  

}
