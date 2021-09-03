
function operacion() {
    var op = document.getElementById("SexoSelccionada").value;          
    var Edad = document.getElementById("Edad").value;
    var Nombre = document.getElementById("Nombre").value;
    var Identificacion = document.getElementById("Identificacion").value;
    var resultado;
    
    if (op === "Femenino") {
        resultado = pulsacionFemenina(Edad);
    }
      if (op === "Masculino") {
        resultado = pulsacionMasculina(Edad);
    }
    if (op==="Seleccione") {
         alert('Debe Seleccionar una operacion');
    }

    document.getElementById("resultado").value = resultado;
    guardar(Identificacion, Nombre, Edad, op, resultado);
}

function pulsacionFemenina(Edad) {
    
    var resultado =(220- parseInt(Edad))/10;
    alert(resultado)
    return resultado;
}
   function pulsacionMasculina(Edad) {
 
    var resultado = (210- parseInt(Edad))/10;
    alert(resultado)
    return resultado;
}
  
function guardar(Identificacion, Nombre, Edad, Sexo, resultado){
var nuevoRegistro = {"Identificacion": Identificacion, "Nombre": Nombre, "Edad": Edad, "Sexo": Sexo, "Pulsacion": resultado}
var registro = [];
    if(JSON.parse(localStorage.getItem('dato'))!=null){
        registro = JSON.parse(localStorage.getItem('dato'));
    }
registro.push(nuevoRegistro);
localStorage.setItem('dato', JSON.stringify(registro));

}
