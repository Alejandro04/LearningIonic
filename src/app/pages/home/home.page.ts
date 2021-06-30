import { Component, OnInit } from '@angular/core';

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
    }
  ];

  constructor() { }

  ngOnInit() {
    this.srcAvatar = "https://alejodev.com/static/4bacf9c87ae8fdf839e2837d9edf8098/3f23b/profile-pic.avif";
  }
}
