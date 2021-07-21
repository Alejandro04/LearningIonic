import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test($event){
    console.log("event", $event)
    console.log("date", new Date($event.detail.value))
  }

  maxAndMin($event){
    console.log("date", new Date($event.detail.value))
  }
}
