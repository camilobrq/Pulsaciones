
function main(){
    alert("ok pro");
    consultar();
    alert("ok pro")
}
function consultar(){
    var registro = [];
    if(JSON.parse(localStorage.getItem('dato'))!=null){
    registro = JSON.parse(localStorage.getItem('dato'));
    }
    var datosTabla = "";
    registro.forEach(element => {
        datosTabla += "<tr>"
        datosTabla += "<td>" + element.Identificacion + "</td>"
        datosTabla += "<td>" + element.Nombre + "</td>"
        datosTabla += "<td>" + element.Edad + "</td>"
        datosTabla += "<td>" + element.Sexo + "</td>"
        datosTabla += "<td>" + element.Pulsacion + "</td>"
        datosTabla += "</tr>"
    });

    document.getElementById("tablaContenedor").innerHTML = datosTabla;
}
