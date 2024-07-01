
export class Image{

  id : string;
  tags : string;
  webformatURL : string;

  likes : string;
  comments : string;


  constructor(id : string,tags : string,  webformatURL : string, likes : string, comments : string) {
    this.id = id;
    this.tags= tags;
    this.webformatURL = webformatURL;
    this.likes = likes;
    this.comments = comments;
  }

}
