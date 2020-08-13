"use strict";
exports.__esModule = true;
var Adminclass_1 = require("./Adminclass");
var RestaurantClass_1 = require("./RestaurantClass");
var MenuClass_1 = require("./MenuClass");
var user = new Adminclass_1.AdminClass("Swapnali", "Admin", 1);
if (user.role === "Admin") {
    console.log("You are successfully logged in as a " + user.role + " " + user.name + " with id " + user.id);
    var menu = new MenuClass_1.MenuClass("Chicken", "Pizza", "Hotdog", "Pad-thai");
    var restau = new RestaurantClass_1.RestaurantClass("Delight", "Pune", 4);
    console.log("Welcome to the Restaurant" + restau.name + " " + restau.address);
    console.log("What would you like to order...");
    console.log("Menus are :" + menu.indian + " " + menu.italian + " " + menu.thai + " " + menu.american);
    console.log("Ratings of the restaurant are :" + restau.ratings);
}
else {
    console.log("Wrong Authorization");
}
