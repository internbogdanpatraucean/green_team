export class Chapter {
    public name: string;
    // public capitol: number;
    public descriere: string;
    public checked:boolean;
    public afterEdit:string;

    constructor(name: string,/* capitol: number,*/  descriere: string) {
        this.name = name;
        // this.capitol = capitol;
        this.descriere = descriere;
        this.checked=false;
        this.afterEdit='';
    }
}