export class QuestionForStudentVM {
    constructor(questionText?:string, answerList?:Array<string>,  points?:number, selectedAnswer?:string){
        this.questionText=questionText;
        this.answerList=answerList;
        this.points=points;
        this.selectedAnswer=selectedAnswer;
        // this.answerList=["A","B","C","D"],
        // this.points=8,
        // this.questionText="A,B,C,D?",
        // this.selectedAnswer=""
    }
    questionText:string;
    answerList:Array<string>;
    points:number;
    selectedAnswer:string;
}
