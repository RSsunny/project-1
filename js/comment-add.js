document.getElementById('submit-button').addEventListener('click',function(){
    const commentFlid=document.getElementById('comment-box')
    const commentText=commentFlid.value;
    const commentBox=document.getElementById('comment-container')
    const p=document.createElement('p')
    p.innerText=commentText
    commentBox.appendChild(p)
    commentFlid.value=''
    }
)