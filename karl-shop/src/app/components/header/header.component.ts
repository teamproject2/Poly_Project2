import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // SHOW left-bar-menu
  showLeftBar() {
    var ele = document.querySelector('.catagories-side-menu2');
    ele.classList.toggle('show');
  }

  // HIDE left-bar-menu
  hideMenu() {
    var ele = document.querySelector('.catagories-side-menu2');
    ele.classList.remove('show');
  }

}
