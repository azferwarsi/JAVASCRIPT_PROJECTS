const btnEle =document.querySelector(".btn")
btnEle.addEventListener("mouseover",(e)=>{
    // console.log(e.pageX,e.pageY);
    // console.log(btnEle.offsetLeft,btnEle.offsetTop);

    const x=e.pageX-btnEle.offsetLeft;
    const y=e.pageY-btnEle.offsetTop;

    btnEle.style.setProperty("--posX",x+"px")
    btnEle.style.setProperty("--posY",y+"px")


})