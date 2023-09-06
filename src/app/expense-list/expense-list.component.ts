import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {

  optionsDisplayed: boolean = false;

  constructor() { }

  setOptionsDisplayed(){
    this.optionsDisplayed = !this.optionsDisplayed;
  }

  ngOnInit(): void {
  }

}
