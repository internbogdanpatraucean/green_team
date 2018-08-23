import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Course } from './course-list.model';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {
 courseName='';
  course: Course[] = [

  ];

  newCourse: Course[] = this.course.slice(0, 6);
  searchName = '';
  index = 6;
  ngOnInit() {
  }
  onCreateButton(event: Event) {
    if (this.courseName == '') {
      (<HTMLInputElement>document.getElementById("courseName")).placeholder = "Enter the category to add...";
    } else{
        this.course.push(new Course(this.courseName.toUpperCase(), '#', '/../../assets/money.jpeg', 'red'));
    }
    this.newCourse = this.course.slice(0, 6);

    

    console.log(this.course);
  }

  onEditButton() {
    if (this.courseName == '') {
      (<HTMLInputElement>document.getElementById("courseName")).placeholder = "Enter the category to edit...";
    } else {
      for (var i = 0; i < this.course.length; i++) {
        if (this.course[i].name.toLowerCase().indexOf(this.courseName.toLowerCase()) > -1) {
          (<HTMLInputElement>document.getElementById("courseName")).innerText = "";
          console.log("eeeee");
          
        }
      }
    }
  }
  onDeleteButton() {
    if (this.courseName == '') {
      (<HTMLInputElement>document.getElementById("courseName")).placeholder = "Enter the category to delete...";
    } else {
      for (var i = 0; i < this.course.length; i++) {
        //compara numele introdus cu numele tuturor obiectelor
        if (this.course[i].name.toLowerCase().indexOf(this.courseName.toLowerCase()) > -1) {
          var elem = this.course.splice(i, 1);
          this.newCourse = this.course.slice(0, 6);
          console.log(elem);

        }
      }
    }
  }
  
  onClickDiscover() {
    this.newCourse = this.course.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.course.length) {
      this.index = 0;
    }
  }
}
