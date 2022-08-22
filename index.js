const hourE1 = document.getElementById
("hour");
const minuteE1=document.getElementById
("minutes");
const secondE1=document.getElementById
("second");
const ampnE1=document.getElementById
("ampm");

function updateclock(){
    let h = new Date ().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "PM";

    if(h>24){
        h= h-24;
        ampm="AM";
    }
     h= h<10? "0" +h :h;
     m= m<10? "0" +m :m;
     s= s<10? "0" +s :s;

    hourE1.innerText =h;
    minuteE1.innerText=m;
    secondE1.innerText=s;
    ampnE1.innerText=ampm;
    setTimeout(()=>{
    updateclock();
    }, 1000);
}
updateclock();