import { Recipe, Attribution } from "./recipe";

export class YummlyResponse {
    public matches: Recipe[];
    public attribution: Attribution;
}