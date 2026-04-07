const barEle=document.querySelector(".bar")
const hideEle=document.querySelector(".hide")
const closeEle=document.querySelector(".close")
barEle.addEventListener("click",()=>{
    hideEle.style.display="block"
})

closeEle.addEventListener("click",()=>{
    hideEle.style.display="none"
})