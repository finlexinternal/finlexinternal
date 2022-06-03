import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'finlex-progress',
  templateUrl: './finlex-progress.component.html',
  styleUrls: ['./finlex-progress.component.scss']
})
export class FinlexProgressComponent implements OnInit {
  @Input() progress = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
