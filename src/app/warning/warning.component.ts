import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  userName: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser() {
    this.userName = "";
  }

}
