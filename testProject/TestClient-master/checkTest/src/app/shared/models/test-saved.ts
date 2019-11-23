export class TestSaved {
  constructor(testId?: number, url?: string, studentId?: number, dateStart?: Date, mark?: number) {
    this.testId = testId;
    this.url = url;
    this.mark = mark;
    this.studentId = 2;
    this.dateStart = dateStart;
    this.studentId = studentId;
  }
  testId: number;
  mark: number;
  url: string;
  studentId: number;
  dateStart: Date;
}
