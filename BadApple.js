var Img = document.getElementById('img');
var time = null;

var Str = document.getElementById('text');

var i = 2;

time = setInterval(function(){
    Img.src = 'demo/'+i+'.png';
    Str.innerHTML="<span style='white-space:pre;'>FPS: 60     目前第: "+i+" / 6545 張";
    i++;

    if(i>6545){clearInterval(time);}

},33.333333333);

function play(){
    var audio= new Audio("./audio.mp3");
    audio.play();
}