import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-options-pop-up',
  templateUrl: './list-options-pop-up.component.html',
  styleUrls: ['./list-options-pop-up.component.css'],
})
export class ListOptionsPopUpComponent implements OnInit {

  @Input() isDisplayed = false;

  options = [
    { checked: true, text: 'Total Sales' },
    { checked: false, text: 'Max Transaxction count per hour' },
    { checked: true, text: 'Total Transaction' },
    { checked: false, text: 'Max Transaction count date-time' },
    { checked: true, text: 'Total Value' },
    { checked: false, text: 'Compressor status' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
