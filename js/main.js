'use strict';

// document.getElementById('target1').addEventListener('click', () => {
//     document.getElementById('target1').classList.toggle('circle1');
//   });
document.getElementById('target2').addEventListener('click', () => {
    document.getElementById('target2').classList.toggle('circle2');
  });
document.getElementById('target3').addEventListener('click', () => {
    document.getElementById('target3').classList.toggle('circle3');
  });



// 音の再生
  function audioPlay(){
    document.getElementById("audio").play();
}
 
//再生を停止
function audioPause(){
    document.getElementById("audio").pause();
}