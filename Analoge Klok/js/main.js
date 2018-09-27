setInterval(function(){
    
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let hourAngle = 0;
    let minuteAngle = 0;
    let secondAngle = 0;

    hourAngle = 30*hour;
    minuteAngle = 6*minutes;
    secondAngle = 6*seconds;
    
    document.querySelector('#hour-hand').style.transform = 'rotate(' + hourAngle + 'deg)';
    document.querySelector('#minute-hand').style.transform = 'rotate(' + minuteAngle + 'deg)';
    document.querySelector('#second-hand').style.transform = 'rotate(' + secondAngle + 'deg)';
    
}, 1000);