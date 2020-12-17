var students=[{name: "Anthony",number:10},{name: "John",number:11},{name: "Mary",number:12}];
var units=[{name: "laws",semester:1,ectsNumber:6},{name: "Literature",semester:2,ectsNumber:3},{name: "Mathematics",semester:1,ectsNumber:6}];
window.onload= function(){
    let studentesName="";
    let unitsName="";
    for(let i in students){
        studentesName+="<option value=’"+i +"’>"+ students[i].name+"</option>";
    }
    document.getElementById('sName').innerHTML=studentesName;
    for(let i in units){
        unitsName+="<option value=’"+i +"’>"+ units[i].name+"</option>";
    }
    document.getElementById('uName').innerHTML=unitsName;

}

function calcula(){
    let sName=document.getElementById("sName").value;
    let uName=document.getElementById("uName").value;
    let pGrade=document.getElementById("pGrade").value;

    let ppGrade=document.getElementById("ppGrade").value;
    let ptGrade=document.getElementById("ptGrade").value;
    let tGrade=document.getElementById("tGrade").value;
    if(sName!="" || tGrade!="" || uName!="" ||ppGrade!=""|| ptGrade!=""){
        let soma=parseFloat(ppGrade) +parseFloat(ptGrade);
        
        if(soma==1){
            let notaFinal=(pGrade*ppGrade)+(tGrade*ptGrade);
            document.getElementById("info").innerHTML= "student "+students[sName].name+"with number"+students[sName].number+"obtained"+notaFinal.toFixed(1)+ " on the "+units[uName].name+" unit ("+units[uName].ectsNumber+" ETCS) of the"+units[uName].semester+"Semester";
        }
    }
}


function reseta(){
    document.getElementById("sName").innerText="";
    document.getElementById("tGrade").innerText="";
    document.getElementById("uName").innerText="";
}