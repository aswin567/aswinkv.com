import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Skill, Contact } from './app';
import {
  MdProgressBarModule,
  MdInputModule,
  MdMenuModule,
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Declaration

  expandMenu: boolean;
  lat: number = 10.4042427;
  lng: number = 76.2709484;
  zoom: number = 15;
  scrollPosition: number;
  cardUp: boolean;
  headerTrasparent: boolean;
  exMarginTrans: boolean;
  edMarginTrans: boolean;
  skillsHeaderUp: boolean;
  exHeaderUp: boolean;
  edHeaderUp: boolean;
  pfHeaderUp: boolean;
  contactHeaderUp: boolean;
  tosterActive: boolean;

  contact: Contact;
  skill: Skill;

  menu: {
    about: boolean,
    skill: boolean,
    exp: boolean,
    edu: boolean,
    pf: boolean,
    contact: boolean,
  }

  constructor() {
    this.onInitialize();
  }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  track(event) {
    this.scrollPosition = document.body.scrollTop;
    console.debug("Scroll Event", document.body.scrollTop);
    if (this.scrollPosition == 0) {
      this.headerTrasparent = true;
    }
    else {
      this.headerTrasparent = false;
    }
    if(this.scrollPosition<500){

        this.menu.about = true;
        this.menu.skill = false;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;
    }
    if (this.scrollPosition > 500) {
      this.skillsHeaderUp = true;
        this.menu.about = false;
        this.menu.skill = true;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;

    }
    if (this.scrollPosition > 900) {
      this.skill = {
        html: 80,
        css: 75,
        js: 60,
        ts: 60,
        angular: 80,
        sass: 70,
        md: 70,
        bs: 70,
        git: 70,
        photoshop: 70,
      }
    }
    if (this.scrollPosition > 1100) {
      this.exHeaderUp = true;
        this.menu.about = false;
        this.menu.skill = false;
        this.menu.exp = true;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;      
    }
    if (this.scrollPosition > 1400) {
      this.exMarginTrans = true;
    }
    if (this.scrollPosition > 1670) {
      this.edHeaderUp = true;
    }
    if (this.scrollPosition > 1970) {
      this.edMarginTrans = true;
    }
    if (this.scrollPosition > 2600) {
      this.pfHeaderUp = true;
              this.menu.about = false;
        this.menu.skill = false;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = true;
        this.menu.contact = false;
    }
    if (this.scrollPosition > 3099) {
      this.contactHeaderUp = true;
      this.menu.about = false;
      this.menu.skill = false;
      this.menu.exp = false;
      this.menu.edu = false;
      this.menu.pf = false;
      this.menu.contact = true;
    }
  }
  onInitialize() {
    this.skill = {
      html: 0,
      css: 0,
      js: 0,
      ts: 0,
      angular: 0,
      sass: 0,
      md: 0,
      bs: 0,
      git: 0,
      photoshop: 0,
    }
    this.menu = {
      about: true,
      skill: false,
      exp: false,
      edu: false,
      pf: false,
      contact: false,
    }
    this.expandMenu = false;
    this.cardUp = false;
    this.headerTrasparent = true;
    this.exMarginTrans = false;
    this.edMarginTrans = false;
    this.tosterActive = false;
    this.cardAnimate();
    this.reset();
  }
  cardAnimate() {
    setTimeout(function () {
      this.cardUp = true;
    }, 1000);
  }

  onExpandMenu() {
    this.expandMenu = !this.expandMenu;
  }

  onNavigate(activeMenu) {
    switch (activeMenu) {
      case "abt":
        this.menu.about = true;
        this.menu.skill = false;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;
        break;
      case "skills":
        this.menu.about = false;
        this.menu.skill = true;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;
        break;
      case "exp":
        this.menu.about = false;
        this.menu.skill = false;
        this.menu.exp = true;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = false;
        break;
      case "pf":
        this.menu.about = false;
        this.menu.skill = false;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = true;
        this.menu.contact = false;
        break;
      case "contact":
        this.menu.about = false;
        this.menu.skill = false;
        this.menu.exp = false;
        this.menu.edu = false;
        this.menu.pf = false;
        this.menu.contact = true;
        break;
    }
  }

  reset() {

    this.contact = {
      name: "",
      email: "",
      subject: "",
      content: ""
    }

  }

  closeToster() {
    this.tosterActive = false;
  }
  submit() {

    let timeoutIde = setTimeout(() => {
      this.tosterActive = true;
    }, 300)
    let timeoutId = setTimeout(() => {
      this.closeToster();
    }, 3000);

  }
  about() {
    window.scrollTo(0,0);
  }
}
