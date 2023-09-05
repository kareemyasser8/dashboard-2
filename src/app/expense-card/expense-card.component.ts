import { Component, Input, OnInit } from '@angular/core';
import ExpenseCard from '../Expense.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.css'],
  providers: [DecimalPipe]
})
export class ExpenseCardComponent implements OnInit {
  @Input() expenseInput: ExpenseCard = {
    text: '',
    value: 0,
    measure: '',
    state: '',
    stateValue: 0,
    stateMeasure: ''
  };

  constructor() {}

  ngOnInit(): void {}
}
