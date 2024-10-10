let btns = document.querySelectorAll('button');


for(btn of btns){
    // btn.onclick = myFunc;
    // btn.onclick = hello;
    btn.addEventListener('click', myFunc);
    btn.addEventListener('click', hello);
}

function myFunc(){
    console.log("button is pressed");
}
function hello(){
    console.log("hello");
}

let element = document.querySelector('p');

function yashu(){
    console.log("paragraph");
}
element.addEventListener("mouseenter",yashu);


