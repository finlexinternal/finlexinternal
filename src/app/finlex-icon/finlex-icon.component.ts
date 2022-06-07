import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'finlex-icon',
  templateUrl: './finlex-icon.component.html',
  styleUrls: ['./finlex-icon.component.scss']
})
export class FinlexIconComponent implements OnInit {
  @Input() public icon: string = 'user';
  @Input() public color: string = 'red';
  @Input() public size: string = 'fa-10x';

  constructor() { }

  ngOnInit(): void {
  }

}
