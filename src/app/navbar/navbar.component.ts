import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onKeydown(event) {
    this.router.navigate([''], { queryParams: { q: event.target.value} });
  }

}
