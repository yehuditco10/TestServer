import { Answer } from './answer';

export class Questions {
     questionId:number;
    questionDescription:string;
    categoryId:number;
    teacherId:number;
    isPrivate:boolean;
    nikud:number;
   Answers:Array<Answer>;
   isNew:boolean;
    constructor(questionId?,questionDescription?,categoriId?,
        teacherId?,isPrivate?,levelQuestion?,arrAnswer?:Answer[]){
            this.questionId=questionId;
            this.questionDescription=questionDescription;
            this.categoryId=categoriId;
            this.teacherId=teacherId;
            this.isPrivate=isPrivate;
            this.nikud=0;
            this.isNew=true;
           if(arrAnswer)
           this.Answers=arrAnswer;
           else
       {
        this.Answers=new Array<Answer>();
        this.Answers.push(new Answer());
        this.Answers.push(new Answer());
        this.Answers.push(new Answer());
     }
     

  }
}
