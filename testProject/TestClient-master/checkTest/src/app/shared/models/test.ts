import { Questions } from './questions';

export class Test {
    testId:number;
    name:string;
     link:string;
    teacherId:number;
    categoriId:number
    constructor(testId?,name?,link?,
        teacherId?,categoriId?,levelQuestion?){
            this.testId=testId;
            this.name=name;
            this.link=link;
            this.teacherId=teacherId;
            this.categoriId=categoriId;
            
           this.questionArr=[];

        }
        questionArr:Array<Questions>;
}
