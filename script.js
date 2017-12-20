counter = 0;
vc = 0;
play = true
playtrack = null;

function change(v) {
  if (v.code == 'Digit5' && play) {
    play = !play;
    todaysong();
  } else if (v.code == 'Digit6') {
    //seek 1+ seconds
  } else if (v.code == 'Digit4') {
    //seek 1- seconds
  }

  counter++;
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
  return baseSrc + String(date) + "." + String(month) + "." + String(year).substr(2,2) + suffix;
}
