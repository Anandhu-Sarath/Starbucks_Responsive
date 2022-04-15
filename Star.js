const icon=document.getElementsByClassName("anti-clockwise");
const btn=document.getElementById('menu-btn')
const nav=document.getElementById('mob-menu')
const down=document.getElementsByClassName("down")

for(let i=0;i<icon.length;i++){
    icon[i].addEventListener("click",() => {
        icon[i].classList.toggle("active");
        down[i].classList.toggle("active")
    })
}






function navToggle(){
   btn.classList.toggle('open')
   nav.classList.toggle('hidden')
   nav.classList.toggle('hide')
   document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navToggle)

