export class Serie {
    id: number;
    name: string;
    platform: string;
    seasons: number;
    description: string;
    link: string;
    img: string;
  

    constructor(id: number, name: string, platform: string, seasons: number, description: string, link: string, img: string) {
      this.id = id;
      this.name = name;
      this.platform = platform;
      this.seasons = seasons;
      this.description = description;
      this.link = link;
      this.img = img;
    }
  }