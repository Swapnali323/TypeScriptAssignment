import { Menu } from "./MenuInterface";

export class MenuClass implements Menu{
  constructor(
    public indian: string,
    public italian: string,
    public american: string,
    public thai: string
  ) {
    this.indian = indian;
    this.italian = italian;
    this.american = american;
    this.thai = thai;
  }
}
function checkMenu(menu:Menu){

}

let order = new MenuClass("Chicken", "Pizza", "Hotdog", "Pad-thai");

checkMenu(order);

// addToTheMenu(order);
