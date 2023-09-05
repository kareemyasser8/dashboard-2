import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {

  @Input() type: string = ''

  isFocused: boolean = false;
  dateTime: Date | undefined

  changeFocus(){
    if(this.dateTime){
      console.log(this.dateTime)
        this.isFocused = true;
    }else{
      console.log(this.dateTime)
      this.isFocused = !this.isFocused;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
