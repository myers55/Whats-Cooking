import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { BrowseComponent } from './components/recipes/browse/browse.component';
import { ViewComponent } from './components/recipes/recipe/view/view.component';
import { RecipesService } from "./services/recipes.service";

const routes: Routes = [
  { path: 'recipes', component: BrowseComponent },
  { path: 'recipes/:id', component: ViewComponent },
  { path: '**', redirectTo: "/recipes"}
];

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RecipesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
