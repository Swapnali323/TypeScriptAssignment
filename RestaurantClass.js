"use strict";
exports.__esModule = true;
exports.RestaurantClass = void 0;
// import { order } from "./MenuClass";
var RestaurantClass = /** @class */ (function () {
    function RestaurantClass(name, address, ratings) {
        this.name = name;
        this.address = address;
        this.ratings = ratings;
        this.ratings = ratings;
        this.name = name;
        this.address = address;
    }
    return RestaurantClass;
}());
exports.RestaurantClass = RestaurantClass;
// function checkMenu(menu: Menu) {
//   return "Menu Card:" + menu.indian+", "+menu.italian+" ,"+menu.thai+" ,"+menu.american
// }
function checkRatings(resto) {
    //  console.log("This is the famous hotel!!")
    // console.log("Ratings:" + resto.ratings);
    //  return "Ratings:" + resto.ratings
}
var resto = new RestaurantClass("Delight", "Pune", 4);
// document.body.textContent = checkMenu(order);
// document.body.textContent = checkRatings(resto);
// console.log(checkRatings(resto));
checkRatings(resto);
