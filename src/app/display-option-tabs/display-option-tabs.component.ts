import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-option-tabs',
  templateUrl: './display-option-tabs.component.html',
  styleUrls: ['./display-option-tabs.component.css']
})
export class DisplayOptionTabsComponent implements OnInit {

  constructor() { }

  tabs: string[] = ['Graph', 'List'];
  selectedTab: number = 0; // Initially select the first tab

  selectTab(index: number) {
    this.selectedTab = index;
  }

  ngOnInit(): void {
  }

}
