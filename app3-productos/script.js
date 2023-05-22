//alamcenador de tareas
//let almacenador = [];

//Boton agregar 
let plus = document.getElementById('boton')

plus.addEventListener('click', agregarI)

//funcion constructora
function Modelo(nombre, numero){
	this.nombre = nombre
	this.numero = numero
}

//funcion mostrar
function mostrar(){
	let almacenador = JSON.parse(localStorage.getItem('registro'))
	let contenedor = document.getElementById('contenedor')
	contenedor.innerHTML = '';
	if(almacenador.length > 0){
		for(let i = 0; i < almacenador.length; i++){
			let producto = almacenador[i]['nombre'];
			let cantidad = almacenador[i]['numero'];
			contenedor.innerHTML += `
			<li>
					<span id="product">${producto}</span>
					<div>
						<input type="number" class="cant" value="${cantidad}"/>
						<a onclick="dele('${producto}')">
						<i class='bx bx-minus-circle' id='less' class="i"></i>
						</a>
					</div>
				</li>
			`
		}
	}
}

//funcion agregar
function agregar(){
	let producto = document.getElementById('productos')
	let cantidad = document.getElementById('cantidad')
	if(producto.value == '' && cantidad.value == ''){
		alert('escribe algo')
	}else{
	
		let nuevo = new Modelo(producto.value, cantidad.value)

		almacenador.push(nuevo)

		mostrar();
		producto.value = '';
		cantidad.value = '';
	}
}

function agregarI(){
	let producto = document.getElementById('productos')
	let cantidad = document.getElementById('cantidad')
	if(producto.value == '' && cantidad.value == ''){
		alert('escribe algo')
	}else{
		let nuevo = new Modelo(producto.value, cantidad.value)
		if(localStorage.getItem('registro') == null){
			let registros = []
			registros.push(nuevo)
			localStorage.setItem('registro', JSON.stringify(registros))
		}else{
			let memoria = JSON.parse(localStorage.getItem('registro'));
			memoria.push(nuevo)
			localStorage.setItem('registro', JSON.stringify(memoria))
		}
		mostrar();
		producto.value = '';
		cantidad.value = '';
	}
}


//Borrar

function del(producto){
	let nuevoArray = []
	for(let i = 0; i < almacenador.length; i++){
		let productos = almacenador[i]['nombre'];
		if(producto !== productos){
			nuevoArray.push(almacenador[i])
		}
	}

	almacenador = nuevoArray;
	mostrar()
}

function dele(producto){
	let memoria = JSON.parse(localStorage.getItem('registro'))
	let nuevaMemoria = []
	for(let i = 0; i < memoria.length; i++){
		let pro = memoria[i]['nombre'];
		if(producto !== pro){
			nuevaMemoria.push(memoria[i])
		}
	}
	localStorage.setItem('registro', JSON.stringify(nuevaMemoria))
	mostrar()
}

mostrar()
