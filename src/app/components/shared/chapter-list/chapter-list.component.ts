import { Component, OnInit } from '@angular/core';
import { splitClasses, MapType } from '@angular/compiler';
import { Chapter } from './chapter-list.model';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})

export class ChapterListComponent implements OnInit {
 
  chapter: Chapter[] = [
    new Chapter('Energy','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Astrology','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('Jokes', '#','/../../assets/money.jpeg', 'blue'),
    new Chapter('Economy','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('Life Hacks','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Astronomy','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('Matematics','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Grammar','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('Literature','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Finance','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('Robotics','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Fun Facts','#','/../../assets/money.jpeg', 'yellow'),
    new Chapter('Android','#', '/../../assets/money.jpeg', 'blue'),
    new Chapter('Fronth End','#', '/../../assets/money.jpeg', 'pink'),
    new Chapter('Back End','#', '/../../assets/money.jpeg', 'black'),
    new Chapter('Testing','#', '/../../assets/money.jpeg', 'yellow'),
    new Chapter('C#','#', '/../../assets/money.jpeg', 'green'),
    new Chapter('Java','#', '/../../assets/money.jpeg', 'red')
  ];
  newChapter:Chapter[] = this.chapter.slice(0, 6);
  searchName = '';
  index = 6;



  ngOnInit() {
  }

  // onClickSearch() {
  
  //   this.newChapter = [];
  //   for (var i = 0; i < this.chapter.length; i++) {
  //     if (this.searchName != "" && this.chapter[i].name.toLowerCase().indexOf(this.searchName.toLowerCase()) != -1) {
  //       this.newChapter.push(this.chapter[i]);
  //       console.log("Exista");
  //     }
  //     else if (this.searchName != this.chapter[i].name)
  //       console.log("Nume incorect.Rescrie!");
  //   }
  // }

  onClickDiscover() {
    // console.log(this.chapter.descriere);
    
    this.newChapter = this.chapter.slice(this.index, this.index + 6);
    this.index += 6;
    this.searchName = "";
    if (this.index >= this.chapter.length) {
      this.index = 0;
    }
  }

}

