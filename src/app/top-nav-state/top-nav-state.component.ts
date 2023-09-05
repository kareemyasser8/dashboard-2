import { Component, Input, OnInit } from '@angular/core';

interface Element {
  number: string;
  text: string;
  type: 'monitored' | 'update'
}

@Component({
  selector: 'app-top-nav-state',
  templateUrl: './top-nav-state.component.html',
  styleUrls: ['./top-nav-state.component.css'],
})
export class TopNavStateComponent implements OnInit {
  @Input() inputElement: Element = { number: '', text: '', type: 'monitored' };

  constructor() {}

  ngOnInit(): void {}
}
