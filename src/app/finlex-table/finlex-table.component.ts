import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableAdapter } from '../table.interface';
enum Types {
  Number,
  String,
  Date,
  Currency,
  Icon,
}

@Component({
  selector: 'finlex-table',
  templateUrl: './finlex-table.component.html',
  styleUrls: ['./finlex-table.component.scss']
})
export class FinlexTableComponent implements OnInit {
  @Input() tableAdapter: TableAdapter[] = [
    {
      columnTitle: 'Id',
      field: 'id',
      type: 'number'
    },
    {
      columnTitle: 'Deductible',
      field: 'deductible',
      type: 'number'
    }
  ];  
  @Input() tableFields = [
    {
      id: 1,
      deductible: 100,
      created_at: '2020-01-01',
    },
    {
      id: 2,
      deductible: 200,
      created_at: '2020-02-02',
    }
  ];
  @Output() public onRowClickEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public onRowClick(event: any): void {
    this.onRowClickEvent.emit(event);
  }

}
