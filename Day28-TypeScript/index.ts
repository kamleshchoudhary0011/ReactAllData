///  Type Inference and Annotation 


let a:string = "dfjghdf"

a="l"

console.log(a);


// primit data type 
{
// string,
 let vel:string = "subham"


// boolean,
 let auhbp :boolean = true

// number,
 let vv:number = 78;


// undefined,
 let has:undefined =  undefined


// bigint,
 let ags:bigint = 3647675n


// symbol
let ersrdrd: symbol = Symbol("hellow");

}
//array  0r  tuple
{

  let  un:unknown = "dhgjd";
//  yesa data jo api ko pta hi nhi hoga 
//jese yato number ayega ya string ayega ya date time ayga 


let nev:never
// never mene khali hi rhega 
//kuch bhi nhi dal skete 



let arr:any[] = [1,2,3,4,5,5,6,7,8,9 ,"gfg", true ,undefined]
// kuch nhi data aa skta hai any me 

let arrs:number[] = [1,2,3,4,5,5,6,7,8,9]
// number me serf number a skta hain

let arrss:string[] = ["gfg", "true" ,"undefined"]
// string me sef string syega 

let  bu:boolean[] = [true , false , true , false ]
// isme serf boolen aa skti hai 


}
// tupels 
{

  let arr:[number , number, string , boolean] = [1432,25,"sjhfghs",true]
  // isme number or number serf 2 ayenge apne value se jada nhi rakh skte hai

let data:[{name:string},
  {age:number} ,
  {islogin:boolean}
] = [{name:"dnfjd"},{age :45} ,{islogin:true}]


}
//Enum -> options 
{
enum Role {
  admin,
  super_admin,
  User
}


let rols1 :Role = Role.admin;
let rols2 :Role = Role.User;
let rols3 :Role = Role.super_admin;


}
//union tupe 
{

  let yolo : string | number |boolean |bigint = "dsjfbhjd";

  yolo = 54;
  yolo = true;
  yolo = 54n;
  

}

// litruls type 
{
  type status = "pending " | "success" | "error";
  let status:status = "error";

}

// object 
{
  let onj:{
    name :string,
    age:number,
    classs:{
      student:number,
      name:string
      isStudent:true
    }
    studentID?:string

  }


  let A :any ={

  }
}

// functions 

{
  let sum = (a:number, b:number) =>{

  return a+b;
}


sum(4,44)
}