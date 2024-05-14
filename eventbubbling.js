const grandParent = document.querySelector('.grandParent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// how to do Event bubbling in js
// grandParent.addEventListener("click",()=>{
//     console.log("This the grand parent bubbling :")
// })
// parent.addEventListener("click",()=>{
//     console.log("This is the parent bubbling :")
// })
// child.addEventListener("click",()=>{
//     console.log("This is the child bubbling :")
// })

// this is the simple bubbling output of this code

// // This the grand parent bubbling :
//  This is the parent bubbling :
// /This the grand parent bubbling :
//  This is the child bubbling :
//  This is the parent bubbling :
// This the grand parent bubbling :

// I want to stop this bubbling so i will use the .stopPropagation()method

// grandParent.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This the grand parent bubbling :")
// })
// parent.addEventListener("click",(element)=>{
//     // element.stopPropagation()
//     console.log("This is the parent bubbling :")
// })
// child.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is the child bubbling :")
// })


// // Event Capturing or trickling we will start from hare ..........
// the event capturing is the opposite of the event bubbling ............ it will print first top side
// grandParent.addEventListener("click",(element)=>{
//     // element.stopPropagation()
//     console.log("This the grand parent bubbling :")
// },{capture:true})
// parent.addEventListener("click",(element)=>{
//     // element.stopPropagation()
//     console.log("This is the parent bubbling :")
// },{capture:true})
// child.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is the child bubbling :")
// },{capture:true})

// 
// If we want to capture the element only once then we can use {once: true} in the event listener
//For event bubbling

// grandParent.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is  the grand parent  event bubbling :")
// },{once:true})
// parent.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is the parent event bubbling :")
// },{once:true})
// child.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is the child event  bubbling :")
// },{once:true})

// OUTPUT-This is the child event  bubbling :
//  This is the parent event bubbling :
//  This is  the grand parent  event bubbling :

// //For event capturing


// grandParent.addEventListener("click",(element)=>{
//     // element.stopPropagation()
//     console.log("This is  the grand parent  event capturing :")
// },{once:true,capture:true})

// parent.addEventListener("click",(element)=>{
//     // element.stopPropagation()
//     console.log("This is the parent event capturing  :")
// },{once:true,capture:true})

// child.addEventListener("click",(element)=>{
//     element.stopPropagation()
//     console.log("This is the child event  capturing  :")
// },{once:true,capture:true})

// To remove the element after a given time
// function printGrandParent(){
//     console.log("GrandParent bubbling :")
// }

// grandParent.addEventListener("click",printGrandParent);
// setTimeout(()=>{
//     grandParent.removeEventListener("click",printGrandParent);
// },8000)



// const button = document.querySelector('#btn');

// function printGrandParent(){
//     console.log('grandParent bubbling');
// }

// grandParent.addEventListener("click", printGrandParent);

// function removeGrandParent(){
//     setTimeout(() => {
//         grandParent.removeEventListener("click", printGrandParent);
//     }, 2000)
// }

// button.addEventListener('click', removeGrandParent);

// / MOUSE EVENTS

// grandParent.addEventListener("mouseover", () => {
//     console.log("hovering");
// })

// grandParent.addEventListener("mouseenter", () => {
//     console.log("hovering");
// })

grandParent.addEventListener("mouseout", () => {
  console.log("hovering");
});

// grandParent.addEventListener("mouseleave", () => {
//     console.log("hovering");
// })