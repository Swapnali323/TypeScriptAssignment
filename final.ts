import { AdminClass } from "./Adminclass";
import { RestaurantClass } from "./RestaurantClass";
import { MenuClass } from "./MenuClass";
var user = new AdminClass("Swapnali", "Admin", 1);

if(user.role==="Admin"){
     console.log("You are successfully logged in as a "+user.role+ " "+user.name+" with id "+user.id);

    var menu = new MenuClass("Chicken", "Pizza", "Hotdog", "Pad-thai");

    var restau = new RestaurantClass("Delight","Pune",4);

    console.log("Welcome to the Restaurant"+restau.name+" "+restau.address);
    console.log("What would you like to order...");

    console.log("Menus are :"+menu.indian+" "+menu.italian+" "+menu.thai+" "+menu.american);

    

    console.log("Ratings of the restaurant are :"+restau.ratings)
}
else{
    console.log("Wrong Authorization")
}