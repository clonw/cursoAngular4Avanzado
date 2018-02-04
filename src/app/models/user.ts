export class User{
    /* Con las lineas de este constructor p.e. public name: string,
    es como si escribiera 
    public name : string
    constructor(name){
        this.name = name;
    }
    Defino la entrada y asigno el valor*/
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public email: string,
        public password: string,
        public role: string,
        public image: string
    ){}
}
