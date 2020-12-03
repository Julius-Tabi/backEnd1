
import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  ngAfterViewInit(){
    setTimeout(() => {
      this.router.navigate(["onboarding"]);
    },5000);
}
}