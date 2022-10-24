let cProgress = document.querySelector(".progress"),
progressW = document.querySelector(".progress-wartosc");

let progressStartW = 0,    
progressEndW = 100,    
speed = 64;

let progress = setInterval(() => {
progressStartW++;

progressW.textContent = `${progressStartW}%`
cProgress.style.background = `conic-gradient(#e63946 ${progressStartW * 3.6}deg, #ededed 0deg)`

if(progressStartW == progressEndW){
    clearInterval(progress);
}    
}, speed);
