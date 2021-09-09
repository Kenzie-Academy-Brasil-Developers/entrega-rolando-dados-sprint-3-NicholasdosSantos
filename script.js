const count = [0,0,0,0,0,0,0,0,0,0,0]

function rolandoDados(){
    for(let i = 0; i < 1000; i ++){
        let dado1 = Math.floor(Math.random() * 6 + 1)
        let dado2 = Math.floor(Math.random() * 6 + 1)
        let soma = dado1 + dado2
        let indice = soma - 2
        count[indice] += 1 
    }
}
rolandoDados()

let body = document.querySelector("body");
let newElement = document.createElement("div");
newElement.className = "minhaDiv";
body.appendChild(newElement);

function paragrafos(){
    for(let i = 0; i< 11; i++){
    let numeros = document.createElement("p");
    numeros.className = "num";
    newElement.appendChild(numeros);
        if(i !== 10){
            numeros.innerHTML += [i + 2] + ": " count[i] + "|"
        }else {
            numeros.innerHTML += "12: " + count[i]
        }
    }
}
paragrafos()

let divBlocos = document.createElement("div");
divBlocos.className = "divBlocos"
body.appendChild(divBlocos)

function fazendoDivs(){
    for(let i = 0; i< 11; i++){
    let divs = document.createElement("div");
    divs.className = "minhaBarra";
    divs.style.height = `${count[i]}px`;
    divs.style.width = `10px`;
    divBlocos.appendChild(divs);
    }
}
fazendoDivs()
