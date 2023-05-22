let form = document.getElementById('formulario')

form.addEventListener('submit', crear)

function crear(e){
  let titulo = document.getElementById('titulo');
  let descripcion = document.getElementById('descripcion');
  let tarea = {
    titulo: titulo.value,
    descripcion: descripcion.value
  }

  if(localStorage.getItem('tareas') == null){
    let tareas = []
    tareas.push(tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }else{
    let tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.push(tarea)
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }

  document.getElementById('formulario').reset();

  visualizar();

  e.preventDefault();
}

function visualizar(){
  let arrayTareas = JSON.parse(localStorage.getItem('tareas'))
  let div = document.getElementById('alamcenDeTareas')

  div.innerHTML = ''

  for(let i = 0; i < arrayTareas.length; i++){
    let titulo = arrayTareas[i]['titulo']
    let descripcion = arrayTareas[i]['descripcion']
     div.innerHTML += `<div class='card mb-3'>
      <p class='card-body'>${titulo} - ${descripcion}</p>
      <a class='btn btn-danger' onclick="borrar('${titulo}')">Borrar<a>
    </div>`
  }

}

function borrar(titulo){
  let arrayTareas = JSON.parse(localStorage.getItem('tareas'))
  let nuevoArray = []
  for(let i = 0; i < arrayTareas.length; i++){
    if(titulo !== arrayTareas[i]['titulo']){
      nuevoArray.push(arrayTareas[i])
    }
  }
  localStorage.setItem('tareas', JSON.stringify(nuevoArray))
  visualizar()
}

visualizar()
