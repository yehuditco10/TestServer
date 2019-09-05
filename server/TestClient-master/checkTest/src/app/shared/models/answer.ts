export class Answer {
    answerId:number;
    answerDescription:string;
    isCorrect:boolean;
    constructor(answerId?,answerDescription?,correct?){
        this.answerDescription=answerDescription;
        this.answerId=answerId;
        this.isCorrect=false;
    }
}
