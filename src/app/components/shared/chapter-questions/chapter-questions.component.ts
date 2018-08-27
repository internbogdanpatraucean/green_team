import { Component, OnInit } from '@angular/core';
import { Question } from './chapter-questions.model';
import { Answer } from './answer.model';
import { Info } from './chapter-info.model';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {
  capitolAccesat = 0;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // questions:Question[]=[
  //   new Question('a,b or c?',[new Answer(1, 'a',), new Answer(2, 'b'), new Answer(3, 'c')]),
  //   new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')]),
  //   new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')]),
  //   new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')])

  // ]

  // infos:Info[]=[
  //   new Info('1','asdfgjsh'),
  //   new Info('1','asdfgjsh'),
  //   new Info('1','asdfgjsh'),
  //   new Info('1','asdfgjsh'),
  //   new Info('1','asdfgjsh'),
  //   new Info('1','asdfgjsh')
  // ]
  questions=[];
  onSubmitClick() {
    // console.log(this.questions);

  }
  onCreateButton(name) {
    console.log(name);
    // debugger
    this.questions.push({
      content: name.value,
      answers: [{answer:"",
    correct:false }]
    })
  }
  index=0;
  correctAnswer=0;
  addQuestion(index){
    this.questions[index].answers.push({answer:"",
    correct:false })
    console.log(this.questions);
    index++;
    
  }
  onPrevButton() {
    this.router.navigate(['/dashboard']);
    this.capitolAccesat--;
    if (this.capitolAccesat === 0) {
      (<HTMLInputElement>document.getElementById("prevButton")).style.visibility = "hidden";
    }
    (<HTMLInputElement>document.getElementById("nextButton")).innerText = "Next Button";
    (<HTMLInputElement>document.getElementById("nextButton")).style.background = "#FFFFFF";
    (<HTMLInputElement>document.getElementById("nextButton")).style.color = "#006FFF";

  }

  onNextButton() {
    this.router.navigate(['/dashboard']);
    this.capitolAccesat++;
    if (this.capitolAccesat >= 1) {
      (<HTMLInputElement>document.getElementById("prevButton")).style.visibility = "visible";
    }
    if (this.capitolAccesat >= 5) {
      (<HTMLInputElement>document.getElementById("nextButton")).innerText = "Finish";
      (<HTMLInputElement>document.getElementById("nextButton")).style.color = "#FFFFFF";
      (<HTMLInputElement>document.getElementById("nextButton")).style.background = "#006FFF";
    }


  }

  onDeleteButton(question: Question) {
    console.log("dddfaf");

    this.questions.splice(this.questions.indexOf(question),1);
    // this.categories.splice(this.categories.indexOf(category),1);
  }
}
  // newQuestions:Question[]=this.question.slice(0,3);
  // index=3;

// }
