import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-select',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   login() {
    alert("hii");
  }

}
