export class TestSaved {
    constructor(testId?:number,url?:string,studentId?:string,dateStart?:Date,mark?:number){
        this.testId=testId;
        this.url=url;
      this.mark=mark;
        this.studentId=2;
        this.dateStart=dateStart;
      
    }
    testId:number;
    mark:number;
    url:string;
    // questionArr:Array<QuestionForStudentVM>;
    studentId:number;
    dateStart:Date;
}
