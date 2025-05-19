const timerDisplay=document.getElementById('timer');
const timerMode=document.getElementById('mode');
const start=document.getElementById('start');
const reset=document.getElementById('reset')
let timer=null;
let running=false;
let working=25*60
let shortBreak=5*60
let longBreak=15*60
let currentTime=working
let cycle=0
let mode='work'

function formatTime(sec){
    const min=String(Math.floor(sec/60)).padStart(2,'0')
    const s=String(sec%60).padStart(2,'0')
    return '${min}:${s}'
}

function updateTimer(){
    timerDisplay.textContent=formatTime(currentTime)
    timerMode.textContent=mode==='work'?'Work':mode==='short'?'Short Break':'Long Break'
}

function switchMode(){
}