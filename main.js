var nombrealumno = [];
function enviar(){
    var nombre1 = document.getElementById("nombre1").value;
    var nombre2 = document.getElementById("nombre2").value;
    var nombre3 = document.getElementById("nombre3").value;
    var nombre4 = document.getElementById("nombre4").value;
    nombrealumno.push(nombre1);
    nombrealumno.push(nombre2);
    nombrealumno.push(nombre3);
    nombrealumno.push(nombre4);
    document.getElementById("ver_nombre").innerHTML = nombrealumno;
    document.getElementById("boton_enviar").style.display = "none";
    document.getElementById("boton_ordenar").style.display = "inline-block";
}
function ordenar(){
    nombrealumno.sort();
    document.getElementById("ver_nombre").innerHTML = nombrealumno;
}