// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Agregar amigos
function agregarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim();
  

//Validar que se ingrese un nombre y que no se repitan
    if (nombreAmigo === ""){
    alert("Por favor, ingrese un nombre");
    return;
    }else if(amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} ya está en la lista`);
    return;
    }
   
//Agregar a nombre a la lista
amigos.push(nombreAmigo);

//Limpiar campo
inputAmigo.value = "";

actualizarLista();

}
function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0;i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay amigos en la lista. Favor agregar algunos.")
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()*amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
