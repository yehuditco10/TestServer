export class Mark {
    studentName: string;
    studentTZ: string;
    mark: number;
    url: string
    constructor(studentName?, studentTZ?, mark?, url?) {
        this.studentName = studentName;
        this.studentTZ = studentTZ;
        this.mark = mark;
        this.url = url;
    }
}
