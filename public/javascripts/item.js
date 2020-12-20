window.onload = function () {
    let json = sessionStorage.getItem("item");
    let item = JSON.parse(json);
console.log(item);
    document.getElementById("studentName").innerHTML = item.sName;
    document.getElementById("unit").innerHTML = item.uName;
    document.getElementById("gradeProject").innerHTML = item.gradep;
    document.getElementById("gradeTest").innerHTML = item.gradet;
    document.getElementById("finalGrade").innerHTML = item.notaFinal;
    document.getElementById("percentageProject").innerHTML = item.percentagep;
    document.getElementById("percentageTest").innerHTML = item.percentaget;
} 