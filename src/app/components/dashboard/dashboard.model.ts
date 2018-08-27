export class Category{
     public name:string;
     public adresa:string;
     public color:string;
     public checked:boolean;
     public afterEdit:string;
    
     constructor(name:string, adresa:string,color:string){
         this.name=name;
         this.adresa=adresa;
         this.color=color;
         this.checked=false;
         this.afterEdit='';
     }
}