const textArea=document.getElementById("textarea");
const totalChar=document.getElementById("total-char");
const remChar=document.getElementById("rem-char");


textArea.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalChar.innerText=textArea.value.length;


    remChar.innerText=textArea.getAttribute("maxLength")-textArea.value.length;
}
