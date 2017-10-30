import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Recipe } from "../models/recipe";
import 'rxjs/add/operator/map';

@Injectable()
export class RecipesService {

  constructor(private http: Http) { }

  public getAll() {
    let headers = new Headers();
    headers.set('X-Yummly-App-Key', '0c5ff2221232061bc75e275f551b0d40');
    headers.set('X-Yummly-App-ID', 'ff7e5894');
    return this.http.get(`http://api.yummly.com/v1/api/recipes`, { headers: headers })
      .map(response => response.json().matches as Recipe[])
      .toPromise();
  }
  // public get(id: string){
  //   let headers = new Headers();
  //   headers.set('X-Yummly-App-Key', '0c5ff2221232061bc75e275f551b0d40');
  //   headers.set('X-Yummly-App-ID', 'ff7e5894');
  //   return this.http.get() 
 
  // }


}
