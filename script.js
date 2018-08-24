let nome = document.querySelector('input');

function entrar(){
    if(nome.value.trim()){
        document.querySelector('#usuario').innerHTML = nome.value;

        document.querySelector('#entrada').style.display = "none";
        document.querySelector('header').style.display = "flex";
    }
}

document.querySelector('button').onclick = entrar;

nome.onkeyup = function(evento){
    if(evento.key === "Enter"){
        entrar();
    }
}

function logar(){
    console.log(this.innerHTML);
}

document.querySelector('#usuario').onmouseenter = logar;

// for (let link of document.querySelectorAll('nav a')){
//     link.onmouseenter = logar;
// }