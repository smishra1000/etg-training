// in js we can crrate object in 5 ways

//1> uisng object literal 
// let user = {
//     name:"test1",
//     age:20
// }
// let user2 = {

// }




// uisng constructor function new keyword 

// 
// function User(name,age){
// // console.log(this);//{}
// this.name=name;
// this.age=age

// }

// let u1 = new User("test1",20);//1>it is creating empty object and return 2// it will assign "this" to newly crrated obj

// let u2 = new User("test2",60)
// let u10 = new User("test10",70)


// console.log(u1);
// console.log(u10)

// {name:"test1",age:20}

// this in js--this means current object--

// rules-- 1> at global level "this" refers to window--
           //2> inside object if you dfine any method then inside that method this will refers to owner object  
           
           // 3 inside object if you dfine any method as an arrow function then inside that method this will refers to lexical surrondings/ window 

// function show(){
//     console.log(this);//
// }

// show();
// this.show();
// window.show();

// let user = {
//     name:"test1",
//     age:20,
//     shoInfo:function(){
//         console.log(this);//user
//         const secondfun = ()=>{
//             console.log(this);//user
//         }
//         secondfun();
//     },
//     showInfo2:()=>{
//         console.log(this);//window
//     }
// }

// user.shoInfo();
// user.showInfo2();


// function showInfo(param1,param2){
//     console.log(this);//window
//     console.log(this.name,this.sal,param1);// undefined
// }

// let employee1 = {
//     name:"emp1",
//     sal:3000,
// }

// let employee2 = {
//     name:"test2",
//     sal:80000,
// }

// let employee3 = {
//     name:"test3",
//     sal:6000,
// }

// // call, apply, bind--

// function greet()
// {
//     console.log("hi good morning")
//     console.log(this);//
// }

// // greet(employee1);
// greet.call(employee2);
// greet.apply(employee3);

// showInfo.call(employee1,"good morning","")
// showInfo.call(employee2,"good evening")
// showInfo.call(employee3,"good night")

// // using apply 
// showInfo.apply(employee1,["good morning","good night"])
// showInfo.apply(employee2,["good morning"])
// showInfo.apply(employee3,["good morning"])

// // difference call apply bind--

// // bind---first it will take ref of that/ letter you have to call it;
// let borrowedFn = showInfo.bind(employee3)
// borrowedFn("good afternoon");



