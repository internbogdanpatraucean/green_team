import { Component, OnInit } from '@angular/core';
import { Question } from './chapter-questions.model';
import { Answer } from './answer.model';

@Component({
  selector: 'app-chapter-questions',
  templateUrl: './chapter-questions.component.html',
  styleUrls: ['./chapter-questions.component.css']
})
export class ChapterQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  questions:Question[]=[
    new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')]),
    new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')]),
    new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')]),
    new Question('a,b or c?',[new Answer(1, 'a'), new Answer(2, 'b'), new Answer(3, 'c')])
  
  ]

  onSubmitClick(){
    console.log(this.questions);
    
  }

  onPrevButton(){

  }

  onNextButton(){
    (<HTMLInputElement>document.getElementById("nextButton")).innerText="Finish";
  
  }
  onFinishButton(){

  }
  
  // newQuestions:Question[]=this.question.slice(0,3);
  // index=3;

}
