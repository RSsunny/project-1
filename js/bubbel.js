// document.getElementById('list-container').addEventListener('click',function(even){
//     // console.log(even.target.parentNode);
//    even.target.parentNode.removeChild(even.target)
// })
// document.getElementById('btn-push').addEventListener('click',function   (){
//     const textBox=document.getElementById('text-box')
//     const commentText=textBox.value;
//     const commentBox=document.getElementById('list-container')
//     const li=document.createElement('li')
//     li.innerText=commentText
//     commentBox.appendChild(li)
//     textBox.value=''
// })
document.getElementById('list-container').addEventListener('click',function(even){
    even.target.parentNode.removeChild(even.target)
})
document.getElementById('btn-push').addEventListener('click',function(){
    const textBox=document.getElementById('text-box')
    const textValue=textBox.value
    const listContainer=document.getElementById('list-container')
    const li=document.createElement('li')
    li.classList.add('item','rounded')
    li.innerText=textValue
    listContainer.appendChild(li)
    textBox.value=''
    
})
document.getElementById('text-box').addEventListener('keyup',function(even){
    const keyWord=even.target.value;
    const deletBtn=document.getElementById('btn-push')
    if(keyWord.length>3){
        deletBtn.removeAttribute('disabled')
    }
    else if(keyWord.length <=3){
        deletBtn.setAttribute('disabled',true)
    }
})
