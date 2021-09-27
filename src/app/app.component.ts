import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MenuFooterButton, MenuLink, User } from './components';
import { Mock } from './interfaces';
@Component({
  selector: 'ft-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend-test';
  menuFooterButtons: MenuFooterButton[] = [];
  menuLinks: MenuLink[] = [];
  menuMinimized = false;
  childrens: MenuLink[] = [];
  user: User | undefined;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<Mock>('assets/mock/menu.json').subscribe((data: Mock) => {
      this.menuLinks = this.handleMenuLinks(data.menu.links);

      this.user = data.user

      this.menuFooterButtons = data.menu.buttons
    });

  }

  handleMenuToggle() {
    this.menuMinimized = !this.menuMinimized;
  }

  private handleMenuLinks(data: MenuLink[]) {
    return  data.map(link => {
      return link = {
        ...link,
        children: data.filter(l => link.id === l.parentId).length ? data.filter(l => link.id === l.parentId) : null,
      }
    }).filter(l => l.parentId === null)
  }
}
