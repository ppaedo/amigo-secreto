// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


//Agregar ammigos
function agregarAmigo(){
    const inputAmigos = document.getElementById("amigos");
    const nombreAmigos = inputAmigos.ariaValueMax.trim();
  

//Validar que se ingrese un nombre y que no se repitan
    if (amigos === ""){
    alert("Por favor, ingrese un nombre");
    return;
    }else if(amigos.includes(nombreAmigos  )){
    alert(`El nombre ${nombreAmigos} ya está en la lista`);
    }

//Agregar a nombre a la lista
amigos.push(nombreAmigos);

//Limpiar campo
inputAmigos.value = "";

actualizarLista();

}
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let i = 0;i <amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
