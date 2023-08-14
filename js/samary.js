// childNodes
const items=document.getElementById('container')
const itmsInnerTag=items.childNodes[1].childNodes[9]
console.log(itmsInnerTag);
// ----------------------------------
// class add or Remove
const title=document.getElementById('title-name')
title.classList.add('rounded','border','pt-5')
title.classList.remove('title')
// --------------------------------
// set Attribute
const settitle=document.getElementById('title-name')
settitle.setAttribute('title','Hero Programing modeul-25')
settitle.removeAttribute('aria-placeholder')
// ---------------------------------
// createElement and appendChild
const ulContainer=document.getElementById('list-container')
const li=document.createElement('li')
li.classList.add('item')
const a=document.createElement('a')
a.setAttribute('href','#')
a.innerText='dfghdgfdhsf'
li.appendChild(a)
ulContainer.appendChild(li)
// --------------------------------
// 2.
const click=document.getElementById('pra')
function pragraph(){
    document.body.style.backgroundColor='red'
}
// 3.
const clicks=document.getElementById('prag')
clicks.onclick=name
function name(){
    document.body.style.backgroundColor='yellow'
}
// 4.
const prag=document.getElementById('prag')
prag.onclick=function name(){
    document.body.style.backgroundColor='yellow'
}
// 5.1
const button1=document.getElementById('btn-1')
button1.addEventListener('click',pink)
   function pink(){
        document.body.style.backgroundColor='pink'
    }
// 5.2
const button2=document.getElementById('btn-2')
button2.addEventListener('click',function(){
    document.body.style.backgroundColor='purple'
})
// 5.3 is the best
document.getElementById('btn-3').addEventListener('click',function(){
    document.body.style.backgroundColor='gray'
})

