var sumects=0;
var unitsFailed=0;
var unitsFinished=0;
var ectsGrade=0;


window.onload = function () { 
  let student ="John Smith" ;
  document.getElementById("student").innerHTML = student+" grades"; 
    unitUpdate(listaUnits);
    detailsUpdade();
  }

  var listaUnits=[
    {unit:'Mathematics',grade:8.3,semestre:'3º',ects:6},
    {unit:'Literature',grade:11.2,semestre:'2º',ects:6},
    {unit:'Laws',grade:18.5,semestre:'1º',ects:3},
    {unit:'Informatics',grade:14.3,semestre:'1º',ects:6},
    {unit:'Cooking',grade:7.4,semestre:'2º',ects:3}
];

function unitUpdate(x){
    let aux="";
    for(let i=0;i<x.length;i++){
        if(x[i].grade<9.5){
            aux+="<section class='boxVermelha'>"; 
            unitsFailed++;
        }
        else{
            aux+="<section class='box'>";
            unitsFinished++;
            ectsGrade=ectsGrade+(x[i].grade*x[i].ects);
            sumects=sumects+x[i].ects;
        }
        aux+= "<section class='sectionUnitGrade'>";
        aux+= "<div class='square' >"+ x[i].unit.substring(0, 2) +"</div>";
        aux+="<section>";
        aux+= "<h2 >"+ x[i].unit +"</h2>";
        aux+= "<p> Grade:" + x[i].grade + "</p>";
        aux+="</section>";
        aux+= "</section>";
        aux+="<section>";
        aux+= "<p> Semestre:" + x[i].semestre + "</p>";
        aux+= "<p> Etcs:" + x[i].ects + "</p>";
        aux+= "</section>";
        aux+= "</section>";
    }
    document.getElementById("grades").innerHTML=aux;
}

function detailsUpdade(){
    let total= ectsGrade/sumects;
    let aux="";
    aux += "<summary>" + "Average: " + total.toFixed(1) + "</summary>";
    aux += "<p>" + unitsFailed + " failed units" + "</p>";
    aux += "<p>" + unitsFinished + " passed units" + "</p>";
document.getElementById("summary").innerHTML = aux;
}