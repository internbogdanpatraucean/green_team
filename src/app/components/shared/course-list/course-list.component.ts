import { Component, OnInit } from '@angular/core';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // public var numeCurs:string ='java';
  categories = ['Astrology',
    'Economy',
    'Finance',
    'Grammar',
    'Fun Facts',
    'Jokes',
    'Life Hacks',
    'Games',
    'Matematics',
    'ddddd',
    'sfsfs',
    'sdsaf',
    'sfafsa',
    'sfafa'
  ];

  newCategories = this.categories.slice(0, 6);
  searchName = '';
  index = 6;

  ngOnInit() {
  }

  onClickSearch() {
    this.newCategories = [];
    for ( let i = 0; i < this.categories.length; i++) {
      if (this.searchName !== '' && this.categories[i].toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1) {
        this.newCategories.push(this.categories[i]);
        console.log('Exista');
      }
    }
  }


  onClickDiscover() {

    this.newCategories = this.categories.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = '';
    // if(this.categories.indexOf===)

    }
  }

