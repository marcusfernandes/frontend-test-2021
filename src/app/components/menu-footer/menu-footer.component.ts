import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

export interface MenuFooterButton {
  icon: string;
  title: string;
  url: string;
}

@Component({
  selector: 'ft-menu-footer',
  templateUrl: './menu-footer.component.html',
  styleUrls: ['./menu-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuFooterComponent implements OnInit {
  @Input() minimize = false;
  @Input() buttons: MenuFooterButton[] = [];
  constructor() {}

  ngOnInit(): void {}
}
