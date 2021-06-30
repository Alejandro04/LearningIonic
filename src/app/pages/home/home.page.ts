import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Items {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public srcAvatar:string;
  public components: Items[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
    {
      icon: 'caret-up-outline',
      name: 'Cards',
      redirectTo: '/cards'
    }
  ];

  constructor(private menu: MenuController) { }

  ngOnInit() {
    this.srcAvatar = "https://alejodev.com/static/4bacf9c87ae8fdf839e2837d9edf8098/3f23b/profile-pic.avif";
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
