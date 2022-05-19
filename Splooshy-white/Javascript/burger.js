
let burger = document.getElementById("btnBurger");
let btnToggle = false;
let nosService = document.getElementById("service");
let dashboard = document.getElementById("dash");


burger.onclick = function(){
    //console.log("ça marche");

    btnToggle = !btnToggle;
    if(btnToggle == true){
        nosService.style.display = 'flex';
        dashboard.style.display = 'flex';
    } else {
        nosService.style.display = 'none';
        dashboard.style.display = 'none';
    }
}

window.onresize = function(){

    if(window.innerWidth > 521){
       // console.log("ça marche");
        nosService.style.display = 'grid';
        dashboard.style.display = 'grid';
    } else {

        nosService.style.display = 'none';
        dashboard.style.display = 'none';
    }

}

/*
function verif() {
    if(window.innerWidth > 720){

        
    }
    console.log(window.innerWidth);
}
verif();
*/

// const btn = document.querySelector('button');
// const text = document.querySelector('.nosService ul', '.dashboard ul');
// let isVisible = false;
// console.log(isVisible);


// btn.addEventListener('click', () => {
//     isVisible = !isVisible;
//     isVisible ? text.classList.add('is-visible') : text.classList.remove('is-visible');
// })