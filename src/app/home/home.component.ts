import {Component, HostListener} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Sayfa 50 pikselden fazla scroll edilirse, isScrolled true olacak
    this.isScrolled = window.scrollY > 50;
  }
}
