const amigos = [];
//Agregar amigos
function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();
  
//Validar que se ingrese un nombre y que no se repitan
    if (nombreAmigo === ""){
    alert("Por favor, ingrese un nombre");
    return;
    }else if(amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo} ya está en la lista`);
    return;
    }

amigos.push(nombreAmigo);//Agregar a nombre a la lista

inputAmigo.value = ""; //Limpiar campo
inputAmigo.focus(); //Se establece foco del elemento de entrada

actualizarLista();
}
function actualizarLista(){
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0;i < amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
        console.log(amigos)
        console.log(listaAmigos)
    }
}
function sortearAmigo(){
    if (amigos.length===0){
        alert("No hay amigos para sortear")
    }
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


  