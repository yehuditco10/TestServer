import { QuestionForStudentVM } from './question-for-student-vm';

export class TestForStudentVM {
    constructor(testId?:number,url?:string,title?:string,questionArr?:Array<QuestionForStudentVM>,studentId?:string,dateStart?:Date){
        this.testId=testId;
        this.title=title;
        this.questionArr=questionArr;
        this.studentId=2;
        this.dateStart=dateStart;
        this.url=url;
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
    questionArr:Array<QuestionForStudentVM>;
    studentId:number;
    dateStart:Date;
    url:string;
}
