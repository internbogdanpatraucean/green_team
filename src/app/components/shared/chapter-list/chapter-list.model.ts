export class Chapter {
    public name: string;
    public capitol: string;
    // public imagePath: string;
    public descriere: string;

    constructor(name: string, capitol: string, /*imagePath: string,*/ descriere: string) {
        this.name = name;
        this.capitol = capitol;
        // this.imagePath = imagePath;
        this.descriere = descriere;

    }
}