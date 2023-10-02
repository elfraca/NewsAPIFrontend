import { Item } from "./Item";

export class SearchResponse {

  constructor(
    public data: Item[],
    public totalPages: number
  ){  }
  
}