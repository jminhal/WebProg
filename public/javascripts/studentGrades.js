var sumects=0;
var unitsFailed=0;
var unitsFinished=0;
var ectsGrade=0;


window.onload = function () { 
    let studentName=sessionStorage.getItem("studentName");
    let studentID=sessionStorage.getItem("studentID");
    document.getElementById("student").innerHTML = studentName+" grades"; 
    unitUpdate(studentID);
    detailsUpdade();
  }

  var listaUnits=[
      [
        {unit:'Mathematics',grade:8.3,semestre:'3º',ects:6},
        {unit:'Literature',grade:11.2,semestre:'2º',ects:6},
        {unit:'Laws',grade:18.5,semestre:'1º',ects:3},
        {unit:'Informatics',grade:14.3,semestre:'1º',ects:6},
        {unit:'Cooking',grade:7.4,semestre:'2º',ects:3}],
      [
        {unit:'Mathematics',grade:10,semestre:'3º',ects:6},
        {unit:'Literature',grade:20,semestre:'2º',ects:6},
        {unit:'Laws',grade:15,semestre:'1º',ects:3},
        {unit:'Informatics',grade:17,semestre:'1º',ects:6},
        {unit:'Cooking',grade:10,semestre:'2º',ects:3}],
      [
        {unit:'Mathematics',grade:8,semestre:'3º',ects:6},
        {unit:'Literature',grade:19,semestre:'2º',ects:6},
        {unit:'Laws',grade:19,semestre:'1º',ects:3},
        {unit:'Informatics',grade:3,semestre:'1º',ects:6},
        {unit:'Cooking',grade:1,semestre:'2º',ects:3}]
];

function unitUpdate(id){
    var units=listaUnits[id];
    let aux="";
    for(let i=0;i<units.length;i++){
        if(units[i].grade<9.5){
            aux+="<section class='boxVermelha'>"; 
            unitsFailed++;
        }
        else{
            aux+="<section class='box'>";
            unitsFinished++;
            ectsGrade=ectsGrade+(units[i].grade*units[i].ects);
            sumects=sumects+units[i].ects;
        }
        aux+= "<section class='sectionUnitGrade'>";
        aux+= "<div class='square' >"+ units[i].unit.substring(0, 2) +"</div>";
        aux+="<section>";
        aux+= "<h2 >"+ units[i].unit +"</h2>";
        aux+= "<p> Grade:" + units[i].grade + "</p>";
        aux+="</section>";
        aux+= "</section>";
        aux+="<section>";
        aux+= "<p> Semestre:" + units[i].semestre + "</p>";
        aux+= "<p> Etcs:" + units[i].ects + "</p>";
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

