import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  countrydetails: any[] = [
    {
      country: 'India',
      people: [
        {
          name: 'Anijt kumar'
        },
        {
          name: 'pranav lamkhade'
        },
        {
          name: 'om Kumar'
        }
      ]
    },
    {
      country: 'UK',
      people: [
        {
          name: 'D Warner'
        },
        {
          name: 'S Smith'
        },
        {
          name: 'J Morkal'
        }
      ]
    },
  ];
}
