export class StartedCourse {
  courseImage: string;
  courseTitle: string;
  courseDescription: string;
  courseProgress: number;
  coursePoints: number;
  courseID: number;

  constructor (img: string, title: string, desc: string, prg: number, points: number, id: number) {
    this.courseImage = img;
    this.courseTitle = title;
    this.courseDescription = desc;
    this.courseProgress = prg;
    this.coursePoints = points;
    this.courseID = id;
  }
}
