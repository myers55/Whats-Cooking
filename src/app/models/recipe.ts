export class Recipe{
    public id: string;
    public recipeName: string;
    public ingredientLines: string[];  
    public smallImageUrls: string[];



    constructor () { 
        this.ingredientLines = [];
    }
}
export class Attribution{
    public html: string;
    public logo: string;
    public text: string;
    public url: string;
}

