let div=document.querySelector('div');
let ul=document.querySelector('ul');


div.addEventListener("click",function(){
    console.log("div was clicked");
});

ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

let li=document.querySelectorAll('li');
for(let i=0;i<=li.length;li++){
    li[i].addEventListener("click",function(event){
        event.stopPropagation();
        console.log("li was clicked");
    })
}
