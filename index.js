let toggle = document.querySelector('.toggle');
let nav = document.querySelector('.mobile-nav');
let close = document.querySelector('.close');

toggle.onclick =function(){
  nav.classList.add("open"); 
};
close.onclick =function(){
  nav.classList.remove("open")
}












var createindex =0;
let modal =document.querySelector('.modal');
let modalimg =document.querySelector('.modal .modalimg');
var im = document.querySelectorAll('.callclet img');
console.log(im)






function openmodal(index){
  createindex = index;
  modal.style.display = "flex";
  modalimg.src =im[createindex].src;
}


function off(){
  modal.style.display = "none";
}
function cheing(go){
  createindex += go;
  if (createindex < 0) {
    createindex= im.length -1;
    
} else if (createindex >= im.length) {
    createindex = 0;
}

modalimg.src =im[createindex].src;
}

