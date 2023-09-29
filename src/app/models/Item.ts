export class Item {

  constructor(
    public id: number,
    public deleted: boolean,
    public type: string,
    public by: string,
    public kids: number[],
    public parent: number,
    public score: number,
    public time: Date,
    public title: string,
    public text: string,
    public url: string,
    public descendants: number,
    public poll: number,
  ){  }
  
}