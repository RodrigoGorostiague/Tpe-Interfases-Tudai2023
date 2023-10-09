import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  images = [
    { url: 'assets/images/slider/4-en-linea-banner.png', alt: '4 en linea', href:'/4-en-linea' },
    { url: 'assets/images/slider/gtav-banner.jpg', alt: 'gta5', href:'/gta-5'},
    { url: 'assets/images/slider/fc24-banner.png', alt: 'fc24' , href:'/fc24'},
  ];
}