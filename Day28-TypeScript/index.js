"use strict";
///  Type Inference and Annotation 
Object.defineProperty(exports, "__esModule", { value: true });
let a = "dfjghdf";
a = "l";
console.log(a);
// primit data type 
{
    // string,
    let vel = "subham";
    // boolean,
    let auhbp = true;
    // number,
    let vv = 78;
    // undefined,
    let has = undefined;
    // bigint,
    let ags = 3647675n;
    // symbol
    let ersrdrd = Symbol("hellow");
}
//array  0r  tuple
{
    let un = "dhgjd";
    //  yesa data jo api ko pta hi nhi hoga 
    //jese yato number ayega ya string ayega ya date time ayga 
    let nev;
    // never mene khali hi rhega 
    //kuch bhi nhi dal skete 
    let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, "gfg", true, undefined];
    // kuch nhi data aa skta hai any me 
    let arrs = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
    // number me serf number a skta hain
    let arrss = ["gfg", "true", "undefined"];
    // string me sef string syega 
    let bu = [true, false, true, false];
    // isme serf boolen aa skti hai 
}
// tupels 
{
    let arr = [1432, 25, "sjhfghs", true];
    // isme number or number serf 2 ayenge apne value se jada nhi rakh skte hai
    let data = [{ name: "dnfjd" }, { age: 45 }, { islogin: true }];
}
//Enum -> options 
{
    let Role;
    (function (Role) {
        Role[Role["admin"] = 0] = "admin";
        Role[Role["super_admin"] = 1] = "super_admin";
        Role[Role["User"] = 2] = "User";
    })(Role || (Role = {}));
    let rols1 = Role.admin;
    let rols2 = Role.User;
    let rols3 = Role.super_admin;
}
//union tupe 
{
    let yolo = "dsjfbhjd";
    yolo = 54;
    yolo = true;
    yolo = 54n;
}
// litruls type 
{
    let status = "error";
}
//# sourceMappingURL=index.js.map