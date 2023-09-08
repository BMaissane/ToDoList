
// query pour form
 const txt = document.querySelectorAll('form');
 console.log(document.forms);
 document.forms[0]

// get username
const userName = document.getElementById('user');
console.log(userName)

// get date
const deadline = document.getElementById('deadline')
console.log(deadline) */

// const userObj = {
//     get textContent(){
//         console.log("Dom changed")
//         return "Le titre"
//     }
// }

// console.log(userObj, '.insertUser')
// Object.innerHTML

// const title = document.getElementsByClassName('.buttons')
// const desc = document.querySelectorAll('desc')
// console.log(title + desc)


const info = document.querySelector('.userInfo')
console.log(info);

const button = document.getElementById('.insertUser2')

document.addEventListener("DOMContentLoaded", (event) => {
  alert("DOM fully loaded and parsed")

}); 

 const user2 = document.getElementById('.insertUser2')
 if (user2 <= 0){
    alert("Champ vide")
    ; 
  }

let category = ["A", "B", "C"]

console.log(category)
