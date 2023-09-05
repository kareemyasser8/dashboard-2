import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-tabs',
  templateUrl: './top-nav-tabs.component.html',
  styleUrls: ['./top-nav-tabs.component.css']
})
export class TopNavTabsComponent implements OnInit {

  tabs: string[] = ['Today', 'Yesterday', 'Last week'];
  selectedTab: number = 0; // Initially select the first tab

  selectTab(index: number) {
    this.selectedTab = index;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
