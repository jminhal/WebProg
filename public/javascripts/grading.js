
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
            document.getElementById("info").innerText= "student "+sName+" obtained "+notaFinal.toFixed(1)+ " on the "+uName+" unit ";

        }
    }
}


function reseta(){
    document.getElementById("sName").innerText="";
    document.getElementById("tGrade").innerText="";
    document.getElementById("uName").innerText="";
}