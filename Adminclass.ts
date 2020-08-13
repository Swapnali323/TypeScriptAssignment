import { Admin } from "./AdminInterface";

export class AdminClass implements Admin{
  login: any;
  constructor(public name: string, public role: string, public id: number) {

  }
}

function login(admin: Admin) {
//  console.log("You are logged in successfully!!");
//  return "login as " + admin.role;
  // console.log("login as " + admin.role);
}
let user = new AdminClass("Swapnali", "Admin", 1);

login(user);
