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

  newChapters:Chapter[]=this.chapters.slice(0,4);
  onCuriculumButton(){
    this.newChapters=this.chapters;
  }
  ngOnInit() {
  }

}