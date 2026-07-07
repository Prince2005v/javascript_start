// // let p = document.querySelector("p");

// // p.addEventListener("click", function (){
// //   p.style.color = "green";
// // });

// // let p = document.querySelector("p");

// // p.addEventListener("dblclick", function (){
// //   p.style.color = "yellow";
  
// // });
// let p = document.querySelector("p");

// function dblclick(){
//   p.style.color = "yellow";
// }
// p.addEventListener("dblclick", dblclick );
// p.removeEventListener("dblclick", dblclick);
let inp = document.querySelector("input");

inp.addEventListener("input", function (data) {
  console.log(data);
});