
function mostrarOpciones(opciones, opcionOrden){
    document.getElementById('disponibles').style.display = "none";       
    document.getElementById('tomadas').style.display = "none";  
    document.getElementById('entregadas').style.display = "none";
    

    document.getElementById(opciones).style.display = "block"; 


    document.querySelectorAll('.opt-orden').forEach(function(elemento) {
        elemento.classList.toggle('seleccionada');

    });
         
}


var disponibles = [
    {
        numero: 'Orden 1',
        imagenServicio: 'img/little.png',
        nombre: 'Super Cheese Ultimate Deluxe',
        descripcion: 'Deliciosa pizza gigante con borde relleno de queso cubierto con mantequilla de ajo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L219.00',
        
    },
    {
        numero: 'Orden 2',
        imagenServicio: 'img/kfc.png',
        nombre: 'Big Box 3',
        descripcion:'1 Kentucky Chicken Sanwich +1 pieza de pollo + 2 complementos + 1 bebida',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L199.00',
        
    },
    {
        numero: 'Orden 3',
        imagenServicio: 'img/chilis.png',
        nombre: 'Wings Over Buffalo',
        descripcion: 'Nuestras clásicas alitas de pollo mezcladas con salsa bufalo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L249.00',
        
    },
   
];   


console.log('disponibles', disponibles);

if (!localStorage.getItem('disponibles')) {
    localStorage.setItem('disponibles',JSON.stringify(disponibles));
    
}

var disponibles = JSON.parse(localStorage.getItem('disponibles'));


function generarDisponiles() {
    disponibles.forEach(function(disponible){
        document.getElementById('disponibles').innerHTML += 
            `<div class="card col-6">
                <div class="card-title">
                    ${disponible.numero}
                    <img src="${disponible.imagenServicio}" class="card-img" >
                </div>
                <div class="card-body">     
                    <div>Detalle de orden:</div>  
                    <div>${disponible.nombre}</div>    
                    <div>${disponible.descripcion}</div> 
                    <br>
                    <div>${disponible.cliente}</div>    
                    <div>${disponible.direccion}<button id="boton">Tomar Orden</button> 
                    </div> 
                    <div>${disponible.precio}</div>  
                </div>
        </div>`;
    });


}
    
generarDisponiles();


var tomadas = [
    {
        numero: 'Orden 1',
        imagenServicio: 'img/little.png',
        nombre: 'Super Cheese Ultimate Deluxe',
        descripcion: 'Deliciosa pizza gigante con borde relleno de queso cubierto con mantequilla de ajo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L219.00',
    
        
      
    },
    {
        numero: 'Orden 2',
        imagenServicio: 'img/kfc.png',
        nombre: 'Big Box 3',
        descripcion:'1 Kentucky Chicken Sanwich +1 pieza de pollo + 2 complementos + 1 bebida',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L199.00',
        
    },
    {
        numero: 'Orden 3',
        imagenServicio: 'img/chilis.png',
        nombre: 'Wings Over Buffalo',
        descripcion: 'Nuestras clásicas alitas de pollo mezcladas con salsa bufalo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L249.00',
        
    },
   
];   


console.log('tomadas', tomadas);

if (!localStorage.getItem('tomadas')) {
    localStorage.setItem('tomadas',JSON.stringify(tomadas));
    
}

var tomadas = JSON.parse(localStorage.getItem('tomadas'));

function generarTomadas() {
    tomadas.forEach(function(tomada){
        document.getElementById('tomadas').innerHTML += 
            `<div class="card col-6">
                <div class="card-title">
                    ${tomada.numero}
                    <img src="${tomada.imagenServicio}" class="card-img" >
                </div>
                <div class="card-body">     
                    <div>Detalle de orden:</div>  
                    <div>${tomada.nombre}</div>    
                    <div>${tomada.descripcion}</div> 
                    <br>
                    <div>${tomada.cliente}</div>    
                    <div>${tomada.direccion}<button id="boton-estado">Estado</button> 
                    </div> 
                    <div>${tomada.precio}</div>  
                </div>
        </div>`;
    });


}
    
generarTomadas();



var entregadas = [
    {
        numero: 'Orden 1',
        imagenServicio: 'img/little.png',
        nombre: 'Super Cheese Ultimate Deluxe',
        descripcion: 'Deliciosa pizza gigante con borde relleno de queso cubierto con mantequilla de ajo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L219.00',
        hora: '12:00 pm'
        
      
    },
    {
        numero: 'Orden 2',
        imagenServicio: 'img/kfc.png',
        nombre: 'Big Box 3',
        descripcion:'1 Kentucky Chicken Sanwich +1 pieza de pollo + 2 complementos + 1 bebida',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L199.00',
        hora: '1:40 pm'
        
    },
    {
        numero: 'Orden 3',
        imagenServicio: 'img/chilis.png',
        nombre: 'Wings Over Buffalo',
        descripcion: 'Nuestras clásicas alitas de pollo mezcladas con salsa bufalo',
        cliente: 'Nelly Homero',
        direccion: 'Col. El Hato',
        precio: 'L249.00',
        hora: '2:15 pm'
        
    },
   
];   



console.log('entregadas', entregadas);

if (!localStorage.getItem('entregadas')) {
    localStorage.setItem('entregadas',JSON.stringify(entregadas));
    
}

var entregadas = JSON.parse(localStorage.getItem('entregadas'));


function generarEntregadas() {
    entregadas.forEach(function(entregada){
        document.getElementById('entregadas').innerHTML += 
            `<div class="card col-6">
                <div class="card-title">
                    ${entregada.numero}
                    <img src="${entregada.imagenServicio}" class="card-img" >
                </div>
                <div class="card-body">     
                    <div>Detalle de orden:</div>  
                    <div>${entregada.nombre}</div>    
                    <div>${entregada.descripcion}</div> 
                    <br>
                    <div>${entregada.cliente}</div>    
                    <div>${entregada.direccion}<div class="hora">Hora de Finalización${entregada.hora}</div> 
                    </div> 
                    <div>${entregada.precio}</div>  
                </div>
        </div>`;
    });


}
    
generarEntregadas();
