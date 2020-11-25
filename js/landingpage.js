function showHideHamburger(){
    var hamburgerElement = document.getElementById("menu");
    if(hamburgerElement.style.display != "none"){
        hamburgerElement.style.display = "none";
        console.log("Hiding");
    }else{
        hamburgerElement.style.display = "grid";
        console.log("Revealing");
    }
}