
const display = document.getElementById("timer");
const start = document.querySelector("#start-btn");
const Pause = document.querySelector("#pause-btn");
const Reset = document.querySelector("#reset-btn");


let strtime = 0;
let elatime = 0;
let running = false;
let inter;
let sec = 0;
let min =0;
let hr =0;

const timer = () =>{

    elatime = Date.now() - strtime;
    hr= Math.floor(elatime/(1000*60*60)%60);
    min = Math.floor(elatime/(1000*60)%60);
    sec = Math.floor(elatime/(1000)%60);

    const zero =(num)=>{
        num = num.toString();
        return num.length < 2 ? "0" + num : num;
    }

    hr  = zero(hr);
    min = zero(min);
    sec = zero(sec);

    display.innerText = `${hr}:${min}:${sec}`;

}

start.addEventListener("click", ()=>{

    if(!running){
        start.textContent = `Start`;
        running = true;
        strtime = Date.now() - elatime;
        inter = setInterval(timer,80);
    }
});


Pause.addEventListener("click", ()=>{

    if(running){

        start.textContent = `Resume`;
        running = false;
        elatime = Date.now() - strtime;
        clearInterval(inter);
    }
});


Reset.addEventListener("click", ()=>{

    start.textContent = `Start`;

    strtime = 0;
    elatime = 0;
    running = false;
    inter;
    sec = 0;
    min =0;
    hr =0;

    
    
        clearInterval(inter);
        display.textContent = `00:00:00`;
});
