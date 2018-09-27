setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.querySelector('.container').innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);