import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Category } from './dashboard.model';
import { splitAtColon } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { CategoryService } from './../../services/CategoryService/category.service';

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
  newCategories: Category[];
  // user=prompt("1 or 2");
  // if(this.user != '' && this.user==1){
  //   (<HTMLInputElement>document.getElementById("categoryName")).style.visibility='hidden';

  // }
  constructor(
    private router: Router,
    private catService: CategoryService
  ) {
    this.catService.getCategory().subscribe(
      data => {
        console.log(data);
        // console.log("merge");
        this.categories = data;
        this.newCategories = this.categories.slice(0, 6);


      },
      error => {
        console.log(error);
        console.log("Nu merge");
      }
    );

  }

  colours = [' #00F2FE', ' #4FACFE', ' #B465DA', '#CF6CC9', '#EE609C', '#EE609C', '#F09819', '#FF5858'];

  ngOnInit() {
  }
  getRandomColor() {
    let firstGradient = this.randomNumber(10, 50);
    return "linear-gradient(90deg, " + this.colours[this.randomNumber(0, 8)] + " " + firstGradient + "%, " + this.colours[this.randomNumber(0, 5)] + ")"
  }

  randomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
  }

  categories: Category[] = [

  ];
  // newCategories: Category[] = this.categories.slice(0, 6);



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

      this.catService.setCategory(new Category(this.categoryName.toUpperCase(), this.getRandomColor())).subscribe(
        succes => {
          this.categories.push(succes);
        },
        error => {

          return error;
        }
      );
    }
    this.newCategories = this.categories.slice(0, 6);
  }


  onEditButton(category: Category) {
    category.checked = !category.checked;
    if (category.afterEdit != undefined) {
      {
        debugger
        if (this.categories.find((item) => item.name === category.afterEdit.toUpperCase()) != null) {
          return;
        }
      }
      this.catService.editCategory(category).subscribe(
        succes => {
        },
        error => {

          return error;
        }
      );
    }
  }

  onDeleteButton(category: Category) {
    console.log("dddfaf");
    this.catService.deleteCategory(category).subscribe(
      succes => {
      },
      error => {

        return error;
      }
    );
    // this.catService.deleteCategory(this.categories.splice(this.categories.indexOf(category), 1)).subscribe(
    //   succes => {
    //   },
    //   error => {

    //     return error;
    //   }
    // );
  }
}



