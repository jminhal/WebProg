var students=[{name: "Anthony",number:10},{name: "John",number:11},{name: "Mary",number:12}];
var units=[{name: "laws",semester:1,ectsNumber:6},{name: "Literature",semester:2,ectsNumber:3},{name: "Mathematics",semester:1,ectsNumber:6}];
window.onload= function(){
    let studentesName="";
    let unitsName="";
    for(let i in students){
        studentesName+="<option value="+i +">"+ students[i].name+"</option>";
    }
    document.getElementById('sName').innerHTML=studentesName;
    for(let i in units){
        unitsName+="<option value="+i +">"+ units[i].name+"</option>";
    }
    document.getElementById('uName').innerHTML=unitsName;

}

function calcula(){
    let obj = {};
    let correct = true;
    if (!verifyEmptyInputs()) correct = false;
    if (!verifyAndSaveGradeProject(obj)) correct = false;
    if (!verifyAndSaveGradeTest(obj)) correct = false;
    if (!verifyAndSavePercentageProject(obj)) correct = false;
    if (!verifyAndSavePercentageTest(obj)) correct = false;
    if (!verifySumPercentages()) correct = false;
    if (!correct) return;
    let sName=document.getElementById("sName").value;
    let uName=document.getElementById("uName").value;
    let pGrade=document.getElementById("pGrade").value;
    let ppGrade=document.getElementById("ppGrade").value;
    let ptGrade=document.getElementById("ptGrade").value;
    let tGrade=document.getElementById("tGrade").value;
    let notaFinal=(pGrade*ppGrade)+(tGrade*ptGrade);
    document.getElementById("info").innerHTML= "student "+students[sName].name+" with number "+students[sName].number+" obtained "+notaFinal.toFixed(1)+ " on the "+units[uName].name+" unit ("+units[uName].ectsNumber+" ETCS) of the "+units[uName].semester+" Semester";

    obj.sName = students[sName].name;
    obj.studentNumber = students[sName].number;
    obj.uName = units[uName].name;
    obj.unitSemester = units[uName].semester;
    obj.unitEtcs = units[uName].ectsNumber;
    obj.notaFinal = notaFinal.toFixed(1);

    let json = JSON.stringify(obj); //converting object to json
    sessionStorage.setItem("item", json); //saving json on Web Storage
    window.location = "item.html"; //changing to the item page
}


function reseta(){
    document.getElementById("sName").innerText="";
    document.getElementById("tGrade").innerText="";
    document.getElementById("uName").innerText="";
}



function verifyEmptyInputs() {
    let pGrade = document.getElementById("pGrade").value;
    let ppGrade = document.getElementById("ppGrade").value;
    let tGrade = document.getElementById("tGrade").value;
    let ptGrade = document.getElementById("ptGrade").value;
    let errorC = document.getElementById("errorC");
    if (pGrade == "" || ppGrade == "" || tGrade == "" || ptGrade == "") {
        errorC.innerHTML = "Fill in the spaces above!";
        errorC.style.display = "block";
        return false;
    }
    errorC.style.display = "none";
    return true;
}
function verifySumPercentages() {
    let ppGrade = document.getElementById("ppGrade").value;
    let ptGrade = document.getElementById("ptGrade").value;
    let errorC = document.getElementById("errorC");
    let soma = parseFloat(ppGrade) + parseFloat(ptGrade);

    if (soma != 1) {
        errorC.innerHTML = "The sum of the percetages have to give 1!";
        errorC.style.display = "block";
        return false;
    }
    errorC.style.display = "none";
    return true;

}


function verifyAndSaveGradeProject(obj) {
    let errorA=document.getElementById("errorA");
    let pGrade = document.getElementById("pGrade");
    if (!pGrade.checkValidity()) {
        errorA.innerHTML = "Grades are between 0 and 20!";
        errorA.style.display = "block";
        return false;
    }
    obj.gradep = pGrade.value;
    errorA.style.display = "none";
    return true;
}
function verifyAndSaveGradeTest(obj) {
    let errorB=document.getElementById("errorB");
    let tGrade = document.getElementById("tGrade");
    if (!tGrade.checkValidity()) {
        errorB.innerHTML = "Grades are between 0 and 20!";
        errorB.style.display = "block";
        return false;
    }
    obj.gradet = tGrade.value;
    errorB.style.display = "none";
    return true;
}
function verifyAndSavePercentageProject(obj) {
    let errorA=document.getElementById("errorA");
    let ppGrade = document.getElementById("ppGrade");
    if (!ppGrade.checkValidity()) {
        errorA.innerHTML = "Percentage are between 0 and 1!";
        errorA.style.display = "block";
        return false;
    }
    obj.percentagep = ppGrade.value;
    errorA.style.display = "none";
    return true;
}
function verifyAndSavePercentageTest(obj) {
    let errorC=document.getElementById("errorC");
    let ptGrade = document.getElementById("ptGrade");
    if (!ptGrade.checkValidity()) {
        errorC.innerHTML = "Percentage are between 0 and 1!";
        errorC.style.display = "block";
        return false;
    }
    obj.percentaget = ptGrade.value;
    errorC.style.display = "none";
    return true;
}

