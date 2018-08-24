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
  searchName = '';
  categoryName = '';

  index = 6;

  colours = [' #00F2FE', ' #4FACFE', ' #B465DA', '#CF6CC9', '#EE609C', '#EE609C', '#F09819', '#FF5858'];


  getRandomColor() {
    let firstGradient = this.randomNumber(10, 50);
    return "linear-gradient(90deg, " + this.colours[this.randomNumber(0, 8)] + " " + firstGradient + "%, " + this.colours[this.randomNumber(0, 5)] + ")"
  }

  randomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
  }
  category: Category[] = [
   
  ];
  newCategories: Category[] = this.category.slice(0, 6);


  //de rezolvat random-ul

  ngOnInit() {
  }

  onClickSearch() {
    this.newCategories = [];
    if (this.searchName === "") {
      (<HTMLInputElement>document.getElementById("search-label")).innerText = "";
      this.newCategories = this.category.slice(0, 6);
    } else {
      for (var i = 0; i < this.category.length; i++) {
        //compara numele introdus cu numele tuturor obiectelor
        if (this.category[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1) {
          (<HTMLInputElement>document.getElementById("search-label")).innerText = '';
          this.newCategories.push(this.category[i]);
        }
      }
      if (this.newCategories.length == 0) {
        (<HTMLInputElement>document.getElementById("search-label")).innerText = "Categorie incorecta!";
        this.newCategories = this.category.slice(0, 6);

      }
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

  onCreateButton(event) {
    if (this.categoryName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to add...";
    } else{

      if(this.category.find((item) => item.name=== this.categoryName.toUpperCase()) != null)
      {
        return;
      }
        this.category.push(new Category(this.categoryName.toUpperCase(), '#', this.getRandomColor()));
    }
    this.newCategories = this.category.slice(0, 6);

    

    console.log(this.category);
  }

  onEditButton() {
    if (this.categoryName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to edit...";
    } else {
      for (var i = 0; i < this.category.length; i++) {
        if (this.category[i].name.toLowerCase().indexOf(this.categoryName.toLowerCase()) > -1) {
          (<HTMLInputElement>document.getElementById("categoryName")).innerText = "";
          console.log("eeeee");
          
        }
      }
    }
  }
  onDeleteButton() {
    if (this.categoryName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to delete...";
    } else {
      for (var i = 0; i < this.category.length; i++) {
        //compara numele introdus cu numele tuturor obiectelor
        if (this.category[i].name.toLowerCase().indexOf(this.categoryName.toLowerCase()) > -1) {
          var elem = this.category.splice(i, 1);
          this.newCategories = this.category.slice(0, 6);
          console.log(elem);

        }
      }
    }
  }
}



