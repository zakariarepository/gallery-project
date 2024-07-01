import {Image} from "./image";


export class ResponseImage{
  hits : Array<Image>=[];


  constructor(images: Array<Image>) {
    this.hits = images;
  }
}
