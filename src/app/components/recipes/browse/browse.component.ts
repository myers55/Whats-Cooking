import { Component, OnInit } from '@angular/core';
import { RecipesService } from "../../../services/recipes.service";
import { Recipe } from "../../../models/recipe";

@Component({
  selector: 'app-recipes-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipesService: RecipesService) { 

  }

  async ngOnInit() {
   this.recipes = await this.recipesService.getAll();
  }

}
