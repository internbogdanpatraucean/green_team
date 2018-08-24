import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Chapter } from './chapter-list.model';
import { splitAtColon } from '@angular/compiler/src/util';
import {Category} from './../../dashboard/dashboard.model';
import {Course} from './../course-list/course-list.model';
import {Info} from './chapter-info.model';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
   
  chapters:Chapter[]=[
    new Chapter('ffdas','1','vfdvfssv'),
    new Chapter('ffdas','2','vfdvfssv'),
    new Chapter('ffdas','3','vfdvfssv'),
    new Chapter('ffdas','4','vfdvfssv'),
    new Chapter('ffdas','5','vfdvfssv'),
    new Chapter('ffdas','6','vfdvfssv')
  ]
  infos:Info[]=[
    new Info('Finante','ssdad','sfagasg')

  ]
  // onCreateButton(event) {
  //   if (this.categoryName == '') {
  //     (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to add...";
  //   } else{

  //     if(this.category.find((item) => item.name=== this.categoryName.toUpperCase()) != null)
  //     {
  //       return;
  //     }
  //       this.category.push(new Category(this.categoryName.toUpperCase(), '#', this.getRandomColor()));
  //   }
  //   this.newCategories = this.category.slice(0, 6);

    

  //   console.log(this.category);
  // }

  // onEditButton() {
  //   if (this.categoryName == '') {
  //     (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to edit...";
  //   } else {
  //     for (var i = 0; i < this.category.length; i++) {
  //       if (this.category[i].name.toLowerCase().indexOf(this.categoryName.toLowerCase()) > -1) {
  //         (<HTMLInputElement>document.getElementById("categoryName")).innerText = "";
  //         console.log("eeeee");
          
  //       }
  //     }
  //   }
  // }
  // onDeleteButton() {
  //   if (this.categoryName == '') {
  //     (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the category to delete...";
  //   } else {
  //     for (var i = 0; i < this.category.length; i++) {
  //       //compara numele introdus cu numele tuturor obiectelor
  //       if (this.category[i].name.toLowerCase().indexOf(this.categoryName.toLowerCase()) > -1) {
  //         var elem = this.category.splice(i, 1);
  //         this.newCategories = this.category.slice(0, 6);
  //         console.log(elem);

  //       }
  //     }
  //   }
  // }
  newChapters:Chapter[]=this.chapters.slice(0,4);
  onCuriculumButton(){
    this.newChapters=this.chapters;
  }
  ngOnInit() {
  }

}