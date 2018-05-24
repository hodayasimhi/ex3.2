var tmpOpacity=0;
window.onload=function(){
    var myPlus=document.getElementById("Plus");
    var mainID=document.getElementById("myMain");
    var addPoint = document.getElementById("addHere"); 

    for(i=0; i<4;i++){
        plusRect();
        console.log("adding rect");
    }

    myPlus.onclick = function (){
        plusRect();
    }

    function plusRect(){
        var sqr=document.createElement("div");
        mainID.insertBefore(sqr, addPoint);

        sqr.classList.add('rect');
        sqr.style.opacity=Math.random();
        sqr.addEventListener("mouseover", function(){
            sqr.style.backgroundColor="#ffffff";
            tmpOpacity=sqr.style.opacity;
            sqr.style.opacity=1 ;
        });
        sqr.addEventListener("mouseout", function(){
            sqr.style.backgroundColor="#000000";
            sqr.style.opacity=tmpOpacity ;
        });
    }
}