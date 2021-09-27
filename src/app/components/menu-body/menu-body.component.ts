import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export interface MenuLink {
  id: number;
  icon: string | null;
  isActive: boolean; // indica se o link está ativo no momento.
  isEnabled: boolean; // indica se o link está disponível - alguns planos de contrato não têm todos os links.
  isVisible: boolean; // indica se o link deve ser mostrado - algumas funcionalidades são habilitadas no futuro.
  parentId: number | null; // id
  text: string;
  children: MenuLink[] | null;
}

type toggleMenu =  {
  parentId: number
}

@Component({
  selector: 'ft-menu-body',
  templateUrl: './menu-body.component.html',
  styleUrls: ['./menu-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuBodyComponent implements OnInit {
  @Input() minimize = false;
  @Input() links: MenuLink[] = [];
  isOpen = -1;


  constructor() {}

  ngOnInit(): void {}

  toggleSubmenu(link: MenuLink): void {
    if(link.children){
      if(this.isOpen === link.id){
        this.isOpen = -1

        link.isActive = false
      }else{
        this.isOpen = link.id

        link.isActive = true
      }
    }
  }

}
