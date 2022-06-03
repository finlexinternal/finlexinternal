import { Component, Input, OnInit } from '@angular/core';
import { FinlexRadioListItems } from '../radio-list.interface';

@Component({
  selector: 'finlex-radio-list',
  templateUrl: './finlex-radio-list.component.html',
  styleUrls: ['./finlex-radio-list.component.scss']
})
export class FinlexRadioListComponent implements OnInit {
  @Input() public dataSource: FinlexRadioListItems[] = [
    {
      value: 1,
      label: 'Option 1',
    },
    {
      value: 2,
      label: 'Option 2',
      tooltip: 'Tooltip for Option 2',
    },
    {
      value: 3,
      label: 'Option 3',
    },
    {
      value: 4,
      label: 'Option 4',
    },
    {
      value: 5,
      // label: 'option 5',
      piturePath: 'https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg',
      tooltip: 'Tooltip for Option 5',
    },
  ];
  @Input() public groupName: string = 'groupName';
  @Input() public customClass: any = {
    'width': '100px',
    'margin': '10px',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
