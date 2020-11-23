 window.onload = function () {

  var student ="John Smith" ;
  document.getElementById("student").innerHTML = student+" grades"; 



  
  var unitName ="Mathematics";
  var unitGrate =7.5;
  var unitNameSec ="Literature";
  var unitGrateSec =11.2;

let aux="";
if(unitGrate<9.5){
    aux+="<section class='boxVermelha'>";  
}
else{
    aux+="<section class='box'>";
}
aux+= "<div class='square' >"+ unitName.substring(0, 2) +"</div>";
aux+= "<section>";
aux+= "<h2 >"+ unitName +"</h2>";
aux+= "<p> Grade:" + unitGrate + "</p>";
aux+= "</section>";
aux+= "</section>";

if(unitGrateSec<9.5){
    aux+="<section class='boxVermelha'>";   
}
else{
    aux+="<section class='box'>";
}
aux+= "<div class='square' >"+ unitNameSec.substring(0, 2) +"</div>";
aux+= "<section>";
aux+= "<h2 >"+ unitNameSec +"</h2>";
aux+= "<p> Grade:" + unitGrateSec + "</p>";
aux+= "</section>";
aux+= "</section>";
document.getElementById("grades").innerHTML=aux;





  }


