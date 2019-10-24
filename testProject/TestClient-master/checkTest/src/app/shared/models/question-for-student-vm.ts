import { Answer } from './answer';

export class QuestionForStudentVM {
    constructor(questionText?:string, answerList?:Array<Answer>,  nikud?:number, selectedAnswer?:Answer){
        this.questionText=questionText;
        this.answerList=answerList;
        this.nikud=nikud;
        this.selectedAnswer=selectedAnswer;
        // this.answerList=["A","B","C","D"],
        // this.points=8,
        // this.questionText="A,B,C,D?",
        // this.selectedAnswer=""
    }
    questionText:string;
    answerList:Array<Answer>;
    nikud:number;
    selectedAnswer:Answer;
}
