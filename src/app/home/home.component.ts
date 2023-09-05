import { Component, OnInit } from '@angular/core';
import ExpenseCard from '../Expense.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cardsData: ExpenseCard[] = [
    {
      text: 'Total Value',
      value: 71_028,
      measure: 'EGP',
      state: 'dec',
      stateValue: 2,
      stateMeasure: '%'
    },
    {
      text: 'Total Sales',
      value: 20_000,
      measure: 'm3',
      state: 'inc',
      stateValue: 2,
      stateMeasure: 'm3'
    },
    {
      text: 'Avg Sales',
      value: 20_000,
      measure: 'm3',
      state: 'dec',
      stateValue: 50,
      stateMeasure: 'm3'
    },
    {
      text: 'Total Transaction Count',
      value: 1567,
      measure: '',
      state: 'inc',
      stateValue: 20,
      stateMeasure: ''
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
