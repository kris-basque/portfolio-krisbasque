import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router'; 

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public router: Router) {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-142384729-1', {
          page_path: event.urlAfterRedirects,
        });
      }

    });
  }
}
