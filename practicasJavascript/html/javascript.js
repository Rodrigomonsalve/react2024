//AQUI SE VEN FORMAS DE IDENTIFICAR ELEMETOS HTML EN CÓDIGO JAVASCRIPT


function ejecuta() {

    document.getElementsByTagName("p")[0].onclick=hola; //Identifica elemetos por etiqueta. En este caso le estamos diciendo que sólo ejecute la funcion cuando se le dé click a la primeara etiqueta <p> del documento. ([0])

    document.getElementById("idTag").onclick=hola2;   //Identifica elemetos por etiqueta. No perder de vista que el id tambien sirve para css.

    for(var i=0;i<3;i++){           
        document.getElementsByTagName("section")[i].onclick=hola3;      //Cuando queramos usar selectores que devuelvan un array, y queramos aplicar el evento a todos los elementos, los tenemos que recorrer.

    }

    document.getElementsByClassName("tiggy")[1].onclick=hola4;  //Identifica elemetos por clase. No perder de vista que las clases tambien sirven para css.

    document.querySelector(".importante").onclick=hola5;   //NO FUNCIONA. SE SUPONE QUE SE USA CON EL ATRIBUTO class

    var etiqueta=document.querySelector(".importante");  //CUANDO GUARDAMOS EL VALOR RETORNADO, SE GUARDA LA ETIQUETA COMPLETA, CON TODO Y SUS ATRIBUTOS, A LA QUE APUNTA EL querySelector o getElements.
}



function hola() {
    alert("Hola");
}

function hola2() {
    alert("Hola2");
}

function hola3() {
    alert("Hola3");
}

function hola4() {
    alert("Hola4");
}

function hola5() {
    alert("Hola5");
}


window.onload=ejecuta;