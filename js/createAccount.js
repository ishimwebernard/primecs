



const timeline = new TimelineMax();

function FlipTab(n){
    var tabs = document.getElementsByClassName('tab');
    for(let tab of tabs){
        tab.style.display = "none";
      
    }
   if(n ==1){
        document.getElementById('signin').style.display = "block";
   }else if(n==2){
    document.getElementById('ceateacc2').style.display = "block";


   }else{
    document.getElementById('ceateacc3').style.display = "block";


   }
}