import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Course } from './dashboard.model';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // public var numeCurs:string ='java';

  colours=['blue','yellow','green','orange','red','pink'];


  getRandomColor(){
    let firstGradient = this.randomNumber(10,50);
    return "linear-gradient(130deg, "+this.colours[this.randomNumber(0,5)]+" "+firstGradient+"%, "+this.colours[this.randomNumber(0,5)] + ")"
  }

  randomNumber(min,max){
    return Math.floor((Math.random() * max) + min);
  }

  course: Course[] = [
    new Course('Energy', '#', this.getRandomColor()),
    new Course('Astrology', '#', this.getRandomColor()),
    new Course('Jokes', '#', this.getRandomColor()),
    new Course('Economy', '#', this.getRandomColor()),
    new Course('Life Hacks', '#', this.getRandomColor()),
    new Course('Astronomy', '#', this.getRandomColor()),
    new Course('Matematics', '#', this.getRandomColor()),
    new Course('Grammar', '#', this.getRandomColor()),
    new Course('Literature', '#', this.getRandomColor()),
    new Course('Finance', '#', this.getRandomColor()),
    new Course('Robotics', '#', this.getRandomColor()),
    new Course('Fun Facts', '#', this.getRandomColor()),
    new Course('Android', '#', this.getRandomColor()),
    new Course('Fronth End', '#', this.getRandomColor()),
    new Course('Back End', '#', this.getRandomColor()),
    new Course('Testing', '#', this.getRandomColor()),
    new Course('C#', '#', this.getRandomColor()),
    new Course('Java', '#', this.getRandomColor())
  ];
  newCourses:Course[] = this.course.slice(0, 6);

  searchName = '';
  index = 6;

  //de rezolvat random-ul
  
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
}



