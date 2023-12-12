import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isNavbarActive = false;
  headerStyle!: string;



  constructor(private route: ActivatedRoute) { }
  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      const path = url[0].path;
      this.headerStyle = this.getHeaderStyle(path);
    });
  }

  getHeaderStyle(path: string): string {
    console.log(path);
    if (path === 'contact' || path === 'about') {
    
      return 'header-style-four';
    } else {
      return 'transparent-header';
    }
  }
}
