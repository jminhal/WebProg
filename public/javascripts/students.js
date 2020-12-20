var students=[{name: "John Smith",number:201, id: 12},{name: "Mary Jane",number:512, id: 31},{name: "Jane Dow",number:45, id: 13}];

window.onload=function(){
    let aux="";
for(let i in students){
    aux+="<section class='box' onclick='showStudent("+i+")'>";
    aux+= "<h2>"+students[i].name+"</h2>";
    aux+= "<p>Number:"+students[i].number+"</p>";
    aux+="</section>";
}
document.getElementById("students").innerHTML=aux;
}

function showStudent(posicao){
    sessionStorage.setItem("studentID",posicao);
    sessionStorage.setItem("studentName",students[posicao].name);
    window.location="studentGrades.html";    
}