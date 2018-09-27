for(let i=0;i<28;i++){
    let r = Math.random();
    if(r<0.5){
        document.querySelector('.container').innerHTML += '<div class="tile white"></div>';
    }else{
        document.querySelector('.container').innerHTML += '<div class="tile black"></div>';
    }
}

let left = document.querySelector('.container');
let clone = left.cloneNode('true');
document.querySelector('.wrapper').appendChild(clone);