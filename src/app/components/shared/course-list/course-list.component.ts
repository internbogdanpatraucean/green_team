import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // public var numeCurs:string ='java';
  constructor() { }

  ngOnInit() {
  }
  onClickSearch()
  {
    console.log("java");
  }
  onClickDiscover()
  {
    console.log("java2");
  }
}
