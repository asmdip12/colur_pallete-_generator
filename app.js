const timerDisplay=document.getElementById('timer');
const timerMode=document.getElementById('mode');
const start=document.getElementById('start');
const reset=document.getElementById('reset')
let timer;
let running=false;
let timeleft=25*60
let cycle=0
let mode='work'

function formatTime(sec){
    const min=String(Math.floor(sec/60)).padStart(2,'0')
    const s=String(sec%60).padStart(2,'0')
    return `${min}:${s}`
}

function updateTimer(){
    timerDisplay.textContent=formatTime(timeleft)
    timerMode.textContent=mode==='work'?'Work':
    mode==='short'?'Short Break':'Long Break'
}

function switchMode(m){
    mode=m;
    if (m==='work') timeleft=25*60;
    else if(m==='short') timeleft=5*60;
    else if (m==='long') timeleft=15*60
    updateTimer()
    document.body.className = m
}

function starttimer(){
    if (running) return;
    running =true;
    timer =setInterval(()=>{
        if (timeleft>0){
            timeleft--
            updateTimer()
        }
        else{
            clearInterval(timer);
            running=false;
            if (mode==='work'){
                cycle++
                if (cycle%4===0) switchMode('long')
                else switchMode('short')
            }
            else{
                switchMode('work')
            }
            starttimer();
        }
    },1000)
}

function resetTimer(){
    clearInterval(timer)
    running=false
    cycle=0
    switchMode('work')
}

start.addEventListener('click',starttimer)
reset.addEventListener('click',resetTimer)
switchMode('work')