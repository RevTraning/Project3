import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['assets/webHelth.jpg','assets/virtual-care-1820x1213.jpg', 'assets/HealthBlog.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
