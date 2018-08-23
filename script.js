function entrar(){
    let nome = document.querySelector('input').value;
    if(nome.trim()){
        document.querySelector('#usuario').innerHTML = nome;

        document.querySelector('#entrada').style.display = "none";
        document.querySelector('header').style.display = "flex";
    }
}

document.querySelector('button').onclick = entrar;

function logar(){
    console.log(this.innerHTML);
}

document.querySelector('#usuario').onmouseenter = logar;

// for (let link of document.querySelectorAll('nav a')){
//     link.onmouseenter = logar;
// }