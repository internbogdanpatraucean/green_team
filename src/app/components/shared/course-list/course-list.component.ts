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
  // public var numeCurs:string ='java';

  course: Course[] = [
    new Course('Energy', '#', 'blue'),
    new Course('Astrology', '#', 'yellow'),
    new Course('Jokes', '#', 'blue'),
    new Course('Economy', '#', 'yellow'),
    new Course('Life Hacks', '#', 'blue'),
    new Course('Astronomy', '#', 'yellow'),
    new Course('Matematics', '#', 'blue'),
    new Course('Grammar', '#', 'yellow'),
    new Course('Literature', '#', 'blue'),
    new Course('Finance', '#', 'yellow'),
    new Course('Robotics', '#', 'blue'),
    new Course('Fun Facts', '#', 'yellow'),
    new Course('Android', '#', 'blue'),
    new Course('Fronth End', '#', 'pink'),
    new Course('Back End', '#', 'black'),
    new Course('Testing', '#', 'yellow'),
    new Course('C#', '#', 'green'),
    new Course('Java', '#', 'red')
  ];
  newCourses:Course[] = this.course.slice(0, 6);
  newCategories = this.categories.slice(0, 6);

  searchName = '';
  index = 6;

  //de rezolvat random-ul
  colours=['blue','yellow','green','orange','red','pink'];
  colorOne=this.colours[Math.floor(Math.random()* this.colours.length)];
  colotTwo=this.colours[Math.floor(Math.random()* this.colours.length)];

  getRandomColor(){
    let firstGradient = this.randomNumber(10,50);
    return "linear-gradient(130deg, "+this.colours[this.randomNumber(0,5)]+" "+firstGradient+"%, "+this.colours[this.randomNumber(0,5)] + ")"
  }

  randomNumber(min,max){
    return Math.floor((Math.random() * max) + min);
  }
  ngOnInit() {
  }

  onClickSearch() {
    this.newCourses = [];
    for (var i = 0; i < this.course.length; i++) {
      if (this.searchName != "" && this.course[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) != -1) {
        this.newCourses.push(this.course[i]);
        console.log("Exista");
      }
      else if (this.searchName != this.course[i].name)
        console.log("Nume incorect.Rescrie!");
    }
  }
  value = 0;

  onClickDiscover() {

    this.newCourses = this.course.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.course.length) {
      this.index = 0;


    }
    
  }


