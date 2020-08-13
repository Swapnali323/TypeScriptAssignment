import { Restaurant } from "./Restaurant";
import { Menu } from "./MenuInterface";
// import { order } from "./MenuClass";
export class RestaurantClass{
    constructor(public name: string, public address: string, public ratings: number) {
        this.ratings = ratings;
        this.name = name;
        this.address = address;
      }
    
    
 
    }
    // function checkMenu(menu: Menu) {
    //   return "Menu Card:" + menu.indian+", "+menu.italian+" ,"+menu.thai+" ,"+menu.american
    // }
     function checkRatings(resto :Restaurant){
      //  console.log("This is the famous hotel!!")
      // console.log("Ratings:" + resto.ratings);
        //  return "Ratings:" + resto.ratings
    }
  
    let resto = new RestaurantClass("Delight","Pune",4);
    
    // document.body.textContent = checkMenu(order);
    // document.body.textContent = checkRatings(resto);
// console.log(checkRatings(resto));
checkRatings(resto);