import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Category } from './dashboard.model';
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

  category: Category[] = [
    new Category('Energy', '#', this.getRandomColor()),
    new Category('Astrology', '#', this.getRandomColor()),
    new Category('Jokes', '#', this.getRandomColor()),
    new Category('Economy', '#', this.getRandomColor()),
    new Category('Life Hacks', '#', this.getRandomColor()),
    new Category('Astronomy', '#', this.getRandomColor()),
    new Category('Matematics', '#', this.getRandomColor()),
    new Category('Grammar', '#', this.getRandomColor()),
    new Category('Literature', '#', this.getRandomColor()),
    new Category('Finance', '#', this.getRandomColor()),
    new Category('Robotics', '#', this.getRandomColor()),
    new Category('Fun Facts', '#', this.getRandomColor()),
    new Category('Android', '#', this.getRandomColor()),
    new Category('Fronth End', '#', this.getRandomColor()),
    new Category('Back End', '#', this.getRandomColor()),
    new Category('Testing', '#', this.getRandomColor()),
    new Category('C#', '#', this.getRandomColor()),
    new Category('Java', '#', this.getRandomColor())
  ];
  newCategories:Category[] = this.category.slice(0, 6);

  searchName = '';
  index = 6;

  //de rezolvat random-ul
  
  ngOnInit() {
  }

  onClickSearch() {
    this.newCategories = [];
    for (var i = 0; i < this.category.length; i++) {
      if (this.searchName != "" && this.category[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) != -1) {
        this.newCategories.push(this.category[i]);
        console.log("Exista");
      }
      else if (this.searchName != this.category[i].name)
        console.log("Nume incorect.Rescrie!");
    }
  }
  value = 0;

  onClickDiscover() {

    this.newCategories = this.category.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.category.length) {
      this.index = 0;


    }
  }
}



