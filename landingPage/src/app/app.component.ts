import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import {HeaderComponent} from "./header/header.component";
import {FirstSectionComponent} from "./first-section/first-section.component";
import {SecondSectionComponent} from "./second-section/second-section.component";
import {ThirdSectionComponent} from "./third-section/third-section.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, HeaderComponent, FirstSectionComponent, SecondSectionComponent,
              ThirdSectionComponent, FooterComponent]
})
export class AppComponent {
  title = 'landingPage';
}
