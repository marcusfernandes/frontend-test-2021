import { MenuFooterButton, MenuLink, User } from "./components";


export interface Menu {
  buttons:MenuFooterButton[],
  links:MenuLink[]
}
export interface Mock {
  user:User;
  menu: Menu;
}


