"use strict";
exports.__esModule = true;
exports.AdminClass = void 0;
var AdminClass = /** @class */ (function () {
    function AdminClass(name, role, id) {
        this.name = name;
        this.role = role;
        this.id = id;
    }
    return AdminClass;
}());
exports.AdminClass = AdminClass;
function login(admin) {
    //  console.log("You are logged in successfully!!");
    //  return "login as " + admin.role;
    // console.log("login as " + admin.role);
}
var user = new AdminClass("Swapnali", "Admin", 1);
login(user);
