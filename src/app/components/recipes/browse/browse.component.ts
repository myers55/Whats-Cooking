import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../../services/recipes.service";
import { Recipe, Attribution } from "../../../models/recipe";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-recipes-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public recipesObservable: Observable<Recipe[]>;
  public attribution: Attribution;
  public ingredients: string[]; 
  public ingredient: string;
  public query: string;

  constructor(private recipesService: RecipesService, private activateRoute: ActivatedRoute) {
    this.recipesObservable = recipesService.recipesObservable;
    this.ingredients = [];

  }

  async ngOnInit() {
    var response = await this.recipesService.getAll();
    this.attribution = response.attribution;

    this.activateRoute.params.subscribe(params => {
      // let page = params.page ? params.page : 1;
      // let size = params.size ? params.size : 20;
    })
  }

  public async search(query: string) {

    if (query) {
      var response = await this.recipesService.search(query, this.ingredients);
      this.attribution = response.attribution;
    }
    else {
      var response = await this.recipesService.getAll();
      this.attribution = response.attribution;
    }

  }


  public async addIngredient(ingredient: string){
    this.ingredients.push(ingredient);
    var response = await this.recipesService.search(this.query, this.ingredients);
    this.ingredient="";

  }


  public async removeIngredient(ingredient: string){
    var index = this.ingredients.findIndex(q => q === ingredient);
    var response = await this.recipesService.search(this.query, this.ingredients);    
    this.ingredients.splice(index, 1);
  }
}
