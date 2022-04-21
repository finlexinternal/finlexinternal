import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableAdapter } from '../table.interface';
import { TableField } from '../table.interface';

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
    }
  ];
  @Input() tableFields: TableField[] = [
    {
      id: 1,
      deductible: 100,
      created_at: '2020-01-01',
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
