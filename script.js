counter = 0;
vc = 0;
play = true
playtrack = null;

function controls(v) {
  if (v.code == 'Digit5' || v.code=="KeyW") {
    play = !play;
    todaysong();
  } else if (v.code == 'Digit6'  || v.code=="KeyE") {
    seek(6)
  } else if (v.code == 'Digit4'  || v.code=="KeyQ") {
    seek(-6)
  }
  else if (v.code == 'Digit8'  || v.code=="KeyS") {
    playtrack.currentTime = playtrack.duration/2;
  }
  else if (v.code == 'Digit7'  || v.code=="KeyA") {
    playtrack.currentTime = 0;
  }
  else if (v.code == 'Digit9'  || v.code=="KeyD") {
    playtrack.currentTime = playtrack.duration - 20;
  }
}

function seek(val){
  playtrack.currentTime += val;
}

function todaysong() {
  if (!playtrack) {
    playtrack = new window.Audio();
    playtrack.src = getTodaySrc();
    playtrack.play();
    playtrack.loop = true;
  }else{
    if(play){
    playtrack.play();
    }else{
      playtrack.pause();
    }
  }
}

function getTodaySrc(){
  baseSrc = "http://www.babamurli.com/01.%20Daily%20Murli/01.%20Hindi/03.%20Hindi%20Murli%20-%20MP3/";
  suffix = "-H.mp3";
  var today = new Date();
  date = today.getDate();
  month = today.getMonth() + 1;
  year = today.getFullYear();

  if(date.toString().length == 1){

    date = "0"+String(date);

  }
  if(month.toString().length == 1){
    month = "0"+String(month);
  }


  return baseSrc + String(date) + "." + String(month) + "." + String(year).substr(2,2) + suffix;
}

function IncCounter(){
counter = parseInt(playtrack.currentTime)
duration = playtrack.duration
document.getElementById('text').innerHTML = counter;
}

todaysong();
setInterval(IncCounter,1000);
