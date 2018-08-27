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
 searchName = '';
 index = 6; 

  courses: Course[] = [

  ];

  newCourse: Course[] = this.courses.slice(0, 6);
  
  ngOnInit() {
  }

  onCreateButton(event) {
    if (this.courseName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the categories to add...";
    } else {
      if (this.courses.find((item) => item.name === this.courseName.toUpperCase()) != null) {
        return;
      }
      this.courses.push(new Course(this.courseName.toUpperCase(), '#', '/../../assets/money.jpeg', 'red'));
    }
    this.newCourse = this.courses.slice(0, 6);
    console.log(this.courses);
  }

  onEditButton(course: Course) {
    course.checked = !course.checked;
    if (course.afterEdit !== '') {
      {
        if (this.courses.find((item) => item.name === course.afterEdit.toUpperCase()) != null) {
          return;
        }
      }
      course.name = course.afterEdit.toUpperCase();
    }
  }
 
  onDeleteButton(course: Course) {
    console.log("dddfaf");

    this.newCourse.splice(this.newCourse.indexOf(course),1);
    this.courses.splice(this.courses.indexOf(course),1);
  }
  
  onClickDiscover() {
    this.newCourse = this.courses.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.courses.length) {
      this.index = 0;
    }
  }
}
