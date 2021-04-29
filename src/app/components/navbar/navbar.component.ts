import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  status: boolean = false;

  ngOnInit(): void {
  }

  setClasses(): object{
    return { 'is-active': this.status }
  }

  toggleNavbar(): void{
    this.status = !this.status
  }


}
