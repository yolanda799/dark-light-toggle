function clicadoDark() {
    document.body.style.backgroundColor = "black";
    localStorage.setItem("estado" , "dark");
}

function clicadoLight() {
    document.body.style.backgroundColor = "white";
    localStorage.setItem("estado" , "light");
}

window.onload = function() {
     const estado = localStorage.getItem("estado");
     if( estado === "dark"){
        document.body.style.backgroundColor = "black";
        }else{
            document.body.style.backgroundColor = "white";
        }
    }