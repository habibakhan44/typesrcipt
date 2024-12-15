"use strict";
// function greetUser(name1:string) :string {
// return `Hey! ${name1}`;
// }
// console.log(greetUser("Habiba"));
// TYPE INNOVATION
// function addNumbers(num1:number,num2:number):number{
// return num1+num2;
// }
// console.log(addNumbers(3,5));
// interface Person {
//     personName: string;
//     personID: number;
//     personEmail:string;
//     personRoom?:number;
// }
// let person1 : Person = {
//     personName: "Habiba",
//     personID: 10,
//     personEmail: 'habibatauqeer591@gmail.com'
// };
// let person2: Person ={
//     personName: "rizwa",
//     personID: 19,
//     personEmail: 'rizwafatima591@gmail.com'
// };
// console.log(`Person ${person1.personID}`);
// console.log(`Person ${person1.personName}`);
// interface DepartmentInfo {
//     dpNum: number;
//     dpName: string;
// }
// interface PersonInfo{
//     personName:string;
//     personID?: number;
//     personAge?:number;
//     personAddress?:string;
// };
// let person : PersonInfo = {
//     personName: "Habiba",
// };
// let worker: PersonInfo | DepartmentInfo ={
//     personName:"Habiba",
//     dpNum: 12,
//     dpName: "IT",
// } 
// let id
// function identity<T>(value: T): T{
//     return value;
// }
// let num = identity(42);
// let str = identity("Hello");
// function identity<H>(value:H):H{
//     return value;
// }
// console.log(identity(52));
// console.log(identity("habiba")); 
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
let person1 = {
    personalName: "Ifra",
    personId: 29,
    role: Roles.admin
};
let person2 = {
    personalName: "Ifraaa",
    personId: 2916,
    role: Roles.user
};
