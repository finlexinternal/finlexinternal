import { Component, Input, OnInit } from '@angular/core';
import { Table } from '../table.interface';

@Component({
  selector: 'finlex-table',
  templateUrl: './finlex-table.component.html',
  styleUrls: ['./finlex-table.component.scss']
})
export class FinlexTableComponent implements OnInit {
  @Input() tableList: Table[] = [
    {
      id: 1,
      deductible: 100,
      created_at: '2020-01-01',
      insurance_sum: 100,
      is_approval_required: true,
      is_preliminary_allowed: 'yes',
      no_offer: false,
      premium: 100
    },
    {
      id: 2,
      deductible: 101,
      created_at: '2020-01-02',
      insurance_sum: 101,
      is_approval_required: true,
      is_preliminary_allowed: 'yes',
      no_offer: false,
      premium: 101
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
