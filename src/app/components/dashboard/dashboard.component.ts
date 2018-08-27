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

  searchName = '';
  categoryName = '';
  editCategoryName = '';
  index = 6;

  colours = [' #00F2FE', ' #4FACFE', ' #B465DA', '#CF6CC9', '#EE609C', '#EE609C', '#F09819', '#FF5858'];


  getRandomColor() {
    let firstGradient = this.randomNumber(10, 50);
    return "linear-gradient(90deg, " + this.colours[this.randomNumber(0, 8)] + " " + firstGradient + "%, " + this.colours[this.randomNumber(0, 5)] + ")"
  }

  randomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  categories: Category[] = [

  ];
  newCategories: Category[] = this.categories.slice(0, 6);

  ngOnInit() {
  }

  onClickSearch() {
    this.newCategories = [];
    if (this.searchName === "") {
      (<HTMLInputElement>document.getElementById("search-label")).innerText = "";
      this.newCategories = this.categories.slice(0, 6);
    } else {
      for (var i = 0; i < this.categories.length; i++) {
        //compara numele introdus cu numele tuturor obiectelor
        if (this.categories[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1) {
          (<HTMLInputElement>document.getElementById("search-label")).innerText = '';
          this.newCategories.push(this.categories[i]);
        }
      }
      if (this.newCategories.length == 0) {
        (<HTMLInputElement>document.getElementById("search-label")).innerText = "Categorie incorecta!";
        this.newCategories = this.categories.slice(0, 6);

      }
    }
  }

  onClickDiscover() {

    this.newCategories = this.categories.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.categories.length) {
      this.index = 0;
    }
  }

  onCreateButton(event) {
    if (this.categoryName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the categories to add...";
    } else {
      if (this.categories.find((item) => item.name === this.categoryName.toUpperCase()) != null) {
        return;
      }
      this.categories.push(new Category(this.categoryName.toUpperCase(), '#', this.getRandomColor()));
    }
    this.newCategories = this.categories.slice(0, 6);
    console.log(this.categories);
  }

  onEditButton(category: Category) {
    category.checked = !category.checked;
    if (category.afterEdit !== '') {
      {
        if (this.categories.find((item) => item.name === category.afterEdit.toUpperCase()) != null) {
          return;
        }
      }
      category.name = category.afterEdit.toUpperCase();
    }
  }
 
  onDeleteButton(category: Category) {
    console.log("dddfaf");

    this.newCategories.splice(this.newCategories.indexOf(category),1);
    this.categories.splice(this.categories.indexOf(category),1);
  }
}



