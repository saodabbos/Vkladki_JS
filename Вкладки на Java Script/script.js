     'use strict';
let as = document.querySelectorAll('.menu a');
let tabs = document.querySelectorAll('.tabs .tab');
for(let i = 0; i < as.length; i ++){
    as[i].addEventListener('click',function(event){
        event.preventDefault();
        for(let a of as){
            a.classList.remove('active');
        }
        for(let tab of tabs){
            tab.classList.remove('active');
        }
        as[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}