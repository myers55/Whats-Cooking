export class Recipe{
    public id: string;
    public recipeName: string;
    public ingredients: string[];  
    public smallImageUrls: string[];
    public imageUrlsBySize: string[];


    constructor () { 
        this.ingredients = [];
    }
}

