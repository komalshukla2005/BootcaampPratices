// let fragment=new DocumentFragment();
// let country=['India','Nepal','America','NewZiLand','Bhutan','South Koria']
// let print=document.querySelector('#con');
// country.forEach((country)=>{
//     let list=document.createElement('li')
//     list.innerHTML=country;
//     fragment.appendChild(list)
// })
// print.appendChild(fragment)

// how to use the After() method in this

// let team=document.querySelector('ul');
// let addPlayer=['Virat','Dhoni','Rohit','Hardik','Gill','Kunal','Yugi','Dhawan'];
// let teams=addPlayer.map((Player)=>{
//     const list=document.createElement('li');
//     list.innerHTML=Player;
//     return list
// })
// team.lastChild.after(...teams)


// how to use the cloneNode () method in js
// // If we use true as an argument, it will clone the node and all its children. If we use false, it will clone only the node.
// let clone=document.querySelector('ul')
// let answer=clone.cloneNode(true)
// answer.id='newTeam';
// document.body.appendChild(answer)


// let clone=document.querySelector('ul')
// let answer=clone.cloneNode(false)
// answer.id='newTeam';
// document.body.appendChild(answer)

// how to remove ()the element from your list .
// Syntax 
// // let childNode = parentNode.removeChild(childNode);
// let lastTeam=document.querySelector('ul')
// lastTeam.removeChild(lastTeam.lastElementChild)


// how to remove the all element from your ul
// let allTeam=document.querySelector('ul');
// allTeam.innerHTML="";// Removes all the children of the ul element.

// you can do it another way also
// while(allTeam.lastChild){
    // allTeam.removeChild(allTeam.lastChild)
// }


// insertBefore() method
//Syntax
// // parentNode.insertBefore(newNode, existingNode);
// let team = document.querySelector('ul');
// let list = document.createElement('li');
// list.innerHTML = "Kohli"; // Corrected spelling of "Kohli"
// team.insertBefore(list, team.firstElementChild);


// after method\
// Define a function called insertAfter
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Example usage:
let team = document.querySelector('ul');
let list = document.createElement('li');
list.textContent = "Kohli"; // Use textContent for simplicity

// Insert the new list item after the first element in the list
insertAfter(list, team.lastElementChild);

// newNode represents the new element we want to insert, and referenceNode represents the existing 
// element after which we want to insert the new one.
