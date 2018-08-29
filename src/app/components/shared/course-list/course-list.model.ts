export class Course {
    public name: string;
    public adresa: string;
    public imagePath: string;
    public descriere: string;
    public checked:boolean;
    public afterEdit:string;
    public categoryId:string;

    constructor(name: string, adresa: string, imagePath: string, descriere: string, categoryId?:string) {
        this.name = name;
        this.adresa = adresa;
        this.imagePath = imagePath;
        this.descriere = descriere;
        this.checked=false;
        this.afterEdit='';
        this.categoryId=categoryId;

    }
}