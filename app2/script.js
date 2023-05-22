const fecha = document.getElementById('fecha')
let input = document.getElementById('input')
let i = document.getElementById('boton-enter')
let lista = document.getElementById('lista')

//funcion agregar

function agregar(tarea){
  let contenido = `
  <li>
  <i class="far fa-circle co" data="realizado" id="0"></i>
  <p>${tarea}</p>
  <i class="fas fa-trash de" data="eliminado" id="0"></i>
  </li>
  `
  lista.insertAdjacentHTML('beforeend', contenido)
}

i.addEventListener('click', ()=>{
  const valor = input.value
  if(valor){ agregar(valor) }
  input.value = "";
})
