import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Chapter } from './chapter-list.model';
import { splitAtColon } from '@angular/compiler/src/util';
import { Category } from './../../dashboard/dashboard.model';
import { Course } from './../course-list/course-list.model';
import { Info } from './chapter-info.model';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {
  chapterName = '';
 


  chapters: Chapter[] = [

  ]
  newChapters: Chapter[] = this.chapters.slice(0, 4);

  infos: Info[] = [
    new Info('Finante', 'sdaaaaaa', 'sfagasg')

  ]
  onCreateButton(event) {
    if (this.chapterName == '') {
      (<HTMLInputElement>document.getElementById("categoryName")).placeholder = "Enter the categories to add...";
    } else {
      if (this.chapters.find((item) => item.name === this.chapterName.replace(/\b\w/g, l => l.toUpperCase())) != null) {
        return;
      }
      this.chapters.push(new Chapter(this.chapterName.replace(/\b\w/g, l => l.toUpperCase()),'ddcf'));
    }
    this.newChapters = this.chapters.slice(0, 6);
  }


  onEditButton(chapter: Chapter) {
    chapter.checked = !chapter.checked;
    if (chapter.afterEdit !== '') {
      {
        if (this.chapters.find((item) => item.name === chapter.afterEdit.replace(/\b\w/g, l => l.toUpperCase())) != null) {
          return;
        }
      }
      chapter.name = chapter.afterEdit.replace(/\b\w/g, l => l.toUpperCase());
    }
  }

  onDeleteButton(chapter: Chapter) {
    console.log("dddfaf");
    this.newChapters.splice(this.newChapters.indexOf(chapter), 1);
    this.chapters.splice(this.chapters.indexOf(chapter), 1);
  }


  onCuriculumButton() {
    this.newChapters = this.chapters;
  }
  ngOnInit() {
  }

}