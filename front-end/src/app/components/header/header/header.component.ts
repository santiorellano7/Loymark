import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerExpand: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll")
  verificaScroll() {
    var posicionScroll = window.scrollY;
    this.headerExpand = ""
    if (posicionScroll != 0) {
      this.headerExpand = "sticky-top shadow-sm"
    }
  }

}
