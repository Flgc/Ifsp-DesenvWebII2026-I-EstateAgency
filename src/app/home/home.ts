import { Component } from '@angular/core';
interface Properties {
  id: number;
  photo: string;
  title: string;
  description: string;
  details: string;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  home: Properties[] = [
    {
      id: 1,
      photo: 'images/casa1.png',
      title: 'Laranjeiras Condominium House',
      description: 'House with 3 bedrooms, 2 bathrooms, and a gourmet kitchen',
      details: 'Close to the park and the ecological reserve'
    },
    {
      id: 2,
      photo: 'images/casa2.png',
      title: 'Montreal Condominium House',
      description: 'House with 3 bedrooms, 2 bathrooms, and a gourmet kitchen',
      details: 'Near to downtown'
    },
    {
      id: 3,
      photo: 'images/casa3.png',
      title: 'House in the Vila Rica Condominium',
      description: 'House with 4 bedrooms, 1 laundry room, 2 bathrooms, and a gourmet kitchen',
      details: 'Near Alphaville'
    },
  ];
  moreDetails(description: Properties) {
    alert(`Property: ${description.title} \nDescription: ${description.description}`);
  }
}
