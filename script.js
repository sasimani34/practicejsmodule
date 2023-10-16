//show modal

var showmodal_button = document.querySelectorAll(".show-modal")
var modaldiv = document.querySelector(".modal")
var overlaydiv = document.querySelector(".overlay")

var closepopup_btn = document.querySelector(".close-modal")
//show popup menu

for(let i=0;i<showmodal_button.length;i++){
    showmodal_button[i].addEventListener("click",function(){
        modaldiv.style.display= "block";
        overlaydiv.style.display= "block";
    })
}


//close popup
function closemodal(){
    modaldiv.style.display= "none";
    overlaydiv.style.display= "none";
}

closepopup_btn.addEventListener("click",function(){
    closemodal()
})

//click outside popup
document.addEventListener('click',(event)=>{
    if(event.target===overlaydiv)
        closemodal()
})

//using escape key  to close modal

document.addEventListener('keyup',(event)=>{
    if(event.key==="Escape")
        closemodal()
})





