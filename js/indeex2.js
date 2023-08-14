
function pinkColor(){
    document.body.style.backgroundColor='pink'
}
const makeblueButton=document.getElementById('blue-button')
function blueColor(){
    document.body.style.backgroundColor='blue'
}
makeblueButton.onclick=blueColor
const makeOrangeButton=document.getElementById('orange-button')
makeOrangeButton.onclick=function orangeColor(){
    document.body.style.backgroundColor='orange'
}
function change(){
const h1=document.getElementById('title-section')
h1.innerText='Oh..!Yeah i can do it'
}
document.getElementById('change-h2').addEventListener('click', function(){
    const h2=document.getElementById('title-section')
    h2.innerText='Awassam ...!this is short cart idea'
})
document.getElementById('click-to-search').addEventListener('click',function(){
    const inputFild=document.getElementById('search-bar')
    const inputValue=inputFild.value
    const p=document.getElementById('change-p')
    p.innerText=inputValue;
    inputFild.value=''
})