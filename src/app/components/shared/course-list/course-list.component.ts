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

  course: Course[] = [
    new Course('Energy', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Astrology', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Jokes', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Economy', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Life Hacks', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Astronomy', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Matematics', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Grammar', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Literature', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Finance', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Robotics', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Fun Facts', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('Android', '#', '/../../assets/money.jpeg', 'blue'),
    new Course('Fronth End', '#', '/../../assets/money.jpeg', 'pink'),
    new Course('Back End', '#', '/../../assets/money.jpeg', 'black'),
    new Course('Testing', '#', '/../../assets/money.jpeg', 'yellow'),
    new Course('C#', '#', '/../../assets/money.jpeg', 'green'),
    new Course('Java', '#', '/../../assets/money.jpeg', 'red')
  ];

  newCourse: Course[] = this.course.slice(0, 6);
  searchName = '';
  index = 6;
  ngOnInit() {
  }

  // onClickSearch() {

  //   this.newChapter = [];
  //   for (var i = 0; i < this.chapter.length; i++) {
  //     if (this.searchName != "" && this.chapter[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) != -1) {
  //       this.newChapter.push(this.chapter[i]);
  //       console.log("Exista");
  //     }
  //     else if (this.searchName != this.chapter[i].name)
  //       console.log("Nume incorect.Rescrie!");
  //   }
  // }

  onClickDiscover() {
    // console.log(this.chapter.descriere);

    this.newCourse = this.course.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.course.length) {
      this.index = 0;
    }
  }
}
