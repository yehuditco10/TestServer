export class Teachers {
    teacherId:number;
    teacherName:string;
    teacherPassword:string;
    email:string;
    isManager:boolean;
    constructor(teacherId?,teacherName?,teacherPassword?,email?,isManager?)
    {
        this.teacherId=teacherId;
        this.teacherName=teacherName;
        this.teacherPassword=teacherPassword;
        this.email=email;
        this.isManager=isManager;
    }

}
