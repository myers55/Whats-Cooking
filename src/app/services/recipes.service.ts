import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe } from "../models/recipe";
import 'rxjs/add/operator/map';
import { Observable, BehaviorSubject } from "rxjs";
import { YummlyResponse } from "../models/yummly-response";


@Injectable()
export class RecipesService {

  public recipesObservable: Observable<Recipe[]>;


  private recipesSubject: BehaviorSubject<Recipe[]>;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.recipesSubject= new BehaviorSubject<Recipe[]>([]);
    this.recipesObservable= this.recipesSubject.asObservable();

    this.headers = new HttpHeaders()
    .set('X-Yummly-App-Key', '0c5ff2221232061bc75e275f551b0d40')
    .set('X-Yummly-App-ID', 'ff7e5894');
  }



  public getAll() {
    let promise = this.http.get<YummlyResponse>(`http://api.yummly.com/v1/api/recipes?maxResult=60&requirePictures=true`, { headers: this.headers })

      .toPromise();

      promise.then(result => this.recipesSubject.next(result.matches));
      return promise;
  }


  public get(id: string) {
    return this.http.get<Recipe>(`http://api.yummly.com/v1/api/recipe/${id}`, { headers: this.headers })

      .toPromise();
  }


  public search(query: string, ingredients: string[]) {
    let params = new HttpParams();
    if(query){
          params = params.set("q", query);
    }
    params = params.set("maxResult", "60")
    params = params.set("requirePictures", "true")
    // .set("start", "0");
    for(let ingredient of ingredients){
      params = params.append("allowedIngredient[]", ingredient);
    }
    let promise = this.http.get<YummlyResponse>(`http://api.yummly.com/v1/api/recipes`, { headers: this.headers, params: params })
          .toPromise();

      promise.then(result => this.recipesSubject.next(result.matches));
      return promise;
  }
  


}
