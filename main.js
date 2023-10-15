function getTime(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var seconds=date.getSeconds();

    hours=formatTime(hours);
    minutes=formatTime(minutes);
    seconds=formatTime(seconds);

    var timeString=hours+":"+minutes+":"+seconds;
    document.getElementById("clock").innerHTML=timeString;

}
function  formatTime(time){
    if(time<10){
        time="0"+time;
    }
    return time;
}

setInterval(getTime,1000);   //Update the clock every second