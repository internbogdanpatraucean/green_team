import { Answer } from "./answer.model";

export class Question{
    public question:string;
    public answers:Answer[];
    public selectedAnswer:any;
    checked:boolean;
    public afterEdit:string;
    constructor(question:string, answers: Answer[]){
        this.question=question;
        this.answers = answers;
        this.checked=false;
        this.afterEdit='';
        
    }
}