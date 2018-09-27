setInterval(function(){
    
    const getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };

    getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {
        document.querySelector('.wrapper').innerHTML = '';
        for(i=0;i<data.length;i++){
            
            document.querySelector('.wrapper').innerHTML += '<div class="parking-container" id="p' + i + '"><h1>' + data[i].name + '</h1><h2>' + data[i].parkingStatus.availableCapacity + '/' + data[i].parkingStatus.totalCapacity + '</h2></div>';
            
            if((data[i].parkingStatus.availableCapacity/data[i].parkingStatus.totalCapacity)>=0.5){
                document.querySelector('#p'+i).style.backgroundColor = 'green';
            }else if((data[i].parkingStatus.availableCapacity/data[i].parkingStatus.totalCapacity)>0.2 && (data[i].parkingStatus.availableCapacity/data[i].parkingStatus.totalCapacity)<0.5){
                document.querySelector('#p'+i).style.backgroundColor = 'orange';
            }else{
                document.querySelector('#p'+i).style.backgroundColor = 'red';
            }
        }
    });
        
}, 1000);