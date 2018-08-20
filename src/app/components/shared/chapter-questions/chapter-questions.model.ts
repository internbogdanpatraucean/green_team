import { Answer } from "./answer.model";

export class Question{
    public question:string;
    public answers:Answer[];
    public selectedAnswer:any;
   
    constructor(question:string, answers: Answer[]){
        this.question=question;
        this.answers = answers
        
    }
}