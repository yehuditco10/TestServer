import { QuestionForStudentVM } from './question-for-student-vm';

export class TestForStudentVM {
    constructor(testId?:number,title?:string,questions?:Array<QuestionForStudentVM>,studentId?:string,dateStart?:Date){
        this.testId=testId;
        this.title=title;
        this.questions=questions;
        this.studentId=2;
        this.dateStart=dateStart;
        // this.title="Test";
        // this.testId=1;
        // this.questions=new Array<QuestionForStudentVM>();
        // this.questions.push(new QuestionForStudentVM());
        // this.questions.push(new QuestionForStudentVM());
        // this.questions.push(new QuestionForStudentVM());
        // this.questions.push(new QuestionForStudentVM());
        // this.questions.push(new QuestionForStudentVM());
        // this.studentId="123";
        // this.dateStart=new Date();
    }
    testId:number;
    title:string;
    questions:Array<QuestionForStudentVM>;
    studentId:number;
    dateStart:Date;
}
