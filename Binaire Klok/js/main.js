setInterval(function(){
    
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let secondsArray = [0, 0, 0, 0, 0, 0];

if((seconds/32)>=1){
    secondsArray[0]=1;
    seconds-=32;
}
if((seconds/16)>=1){
    secondsArray[1]=1;
    seconds-=16;
}
if((seconds/8)>=1){
    secondsArray[2]=1;
    seconds-=8;
}
if((seconds/4)>=1){
    secondsArray[3]=1;
    seconds-=4;
}
if((seconds/2)>=1){
    secondsArray[4]=1;
    seconds-=2;
}
if((seconds/1)>=1){
    secondsArray[5]=1;
    seconds-=1;
}

document.querySelector('.seconds').innerHTML = '';
for(i=0;i<secondsArray.length;i++){
    if(secondsArray[i]==1){
        document.querySelector('.seconds').innerHTML += '<div class="led lit"></div>';
    }else{
        document.querySelector('.seconds').innerHTML += '<div class="led"></div>';
    }
}

let minutesArray = [0, 0, 0, 0, 0, 0];

if((minutes/32)>=1){
    minutesArray[0]=1;
    minutes-=32;
}
if((minutes/16)>=1){
    minutesArray[1]=1;
    minutes-=16;
}
if((minutes/8)>=1){
    minutesArray[2]=1;
    minutes-=8;
}
if((minutes/4)>=1){
    minutesArray[3]=1;
    minutes-=4;
}
if((minutes/2)>=1){
    minutesArray[4]=1;
    minutes-=2;
}
if((minutes/1)>=1){
    minutesArray[5]=1;
    minutes-=1;
}

document.querySelector('.minutes').innerHTML = '';
for(i=0;i<minutesArray.length;i++){
    if(minutesArray[i]==1){
        document.querySelector('.minutes').innerHTML += '<div class="led lit"></div>';
    }else{
        document.querySelector('.minutes').innerHTML += '<div class="led"></div>';
    }
}

let hoursArray = [0, 0, 0, 0, 0, 0];

if((hours/32)>=1){
    hoursArray[0]=1;
    hours-=32;
}
if((hours/16)>=1){
    hoursArray[1]=1;
    hours-=16;
}
if((hours/8)>=1){
    hoursArray[2]=1;
    hours-=8;
}
if((hours/4)>=1){
    hoursArray[3]=1;
    hours-=4;
}
if((hours/2)>=1){
    hoursArray[4]=1;
    hours-=2;
}
if((hours/1)>=1){
    hoursArray[5]=1;
    hours-=1;
}

document.querySelector('.hours').innerHTML = '';
for(i=0;i<hoursArray.length;i++){
    if(hoursArray[i]==1){
        document.querySelector('.hours').innerHTML += '<div class="led lit"></div>';
    }else{
        document.querySelector('.hours').innerHTML += '<div class="led"></div>';
    }
}
    
}, 1000);