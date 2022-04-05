
var ordenes = [
    {
        numero: 'Orden 1',
        imagenServicio: 'img/little.png',
        nombre: 'Super Cheese Ultimate Deluxe',
        descripcion: 'Deliciosa pizza gigante con borde relleno de queso cubierto con mantequilla de ajo',
        precio: 'L219.00',
        imagenProducto: 'img/pizza.png',
        
      
    },
    {
        numero: 'Orden 2',
        imagenServicio: 'img/kfc.png',
        nombre: 'Big Box 3',
        descripcion:'1 Kentucky Chicken Sanwich +1 pieza de pollo + 2 complementos + 1 bebida',
        precio: 'L199.00',
        imagenProducto: 'img/big-box.png',
        
    },
    {
        numero: 'Orden 3',
        imagenServicio: 'img/chilis.png',
        nombre: 'Wings Over Buffalo',
        descripcion: 'Nuestras clásicas alitas de pollo mezcladas con salsa bufalo',
        precio: 'L249.00',
        imagenProducto: 'img/alitas.jpg',
        
    },
   
];   


console.log('ordenes', ordenes);

if (!localStorage.getItem('ordenes')) {
    localStorage.setItem('ordenes',JSON.stringify(ordenes));
    
}

var ordenes = JSON.parse(localStorage.getItem('ordenes'));


function generarOrdenes() {
    ordenes.forEach(function(orden){
        document.getElementById('ordenes').innerHTML += 
            `<div class="card col-12">
                <div class="card-title col-3">
                    ${orden.numero}
                    <br>
                    <img src="${orden.imagenServicio}" class="card-img" >
                </div>

                <div class="card-body col-6">     
                    <div>${orden.nombre}</div>    
                    <div>${orden.descripcion}</div>  
                    <br>  
                    <div>${orden.precio}</div> 
                </div>

         
                <div class=" row col-3">
                   <div> 
                    <img src="${orden.imagenProducto}" class="card-imgProducto">
                   </div>
                    <br>
                    <button id="boton">Asignar</button> 
                </div>
        </div>`;
    });


}
    
generarOrdenes();