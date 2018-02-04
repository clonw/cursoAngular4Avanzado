export class Animal{
    /* Con las lineas de este constructor p.e. public name: string,
    es como si escribiera 
    public name : string
    constructor(name){
        this.name = name;
    }
    Defino la entrada y asigno el valor*/
    constructor(
        public name: string,
        public description: string,
        public year: number,
        public user: string,
        public image: string
    ){}
}
