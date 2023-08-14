
document.getElementById('search-bar-2').addEventListener('keyup',function(even){
    const keyWord=even.target.value;
    const deletBtn=document.getElementById('delet-btn')
    if(keyWord==='delet'){
        deletBtn.removeAttribute('disabled')
    }
    else{
        deletBtn.setAttribute('disabled',true)
    }
})
document.getElementById('delet-btn').addEventListener('click',function(){
    const repoFild=document.getElementById('repo')
    repoFild.style.display='none'

})