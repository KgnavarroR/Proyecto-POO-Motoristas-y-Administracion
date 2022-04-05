
var motoristas = [
    {
        empleado: 'Motorista 1',
        nombre: 'Juan Matamoros',
        correo: 'juanmatamoros@gmail.com',
        numero: '96503456',
      
    },
    {
        empleado: 'Motorista 2',
        nombre: ' Douglas Flores',
        correo: 'douglasflores32@gmail.com',
        numero: '33456789',
      
    },
    {
        empleado: 'Motorista 3',
        nombre: 'Daniel González',
        correo: 'danigonzalez@gmail.com',
        numero: '95098657',
    },
   
];   

console.log('motoristas', motoristas);

if (!localStorage.getItem('motoristas')) {
    localStorage.setItem('motoristas',JSON.stringify(motoristas));
    
}

var motoristas = JSON.parse(localStorage.getItem('motoristas'));

function generarMotoristas() {
    motoristas.forEach(function(motorista){
        document.getElementById('motoristas').innerHTML += 
               `<div class="card">
                <div class="card-body row col-12">
                    <div class="row col-10">
                        <div class="card-title col-12">
                          ${motorista.empleado}
                        </div>
                        <div  class="col-2">Nombre:</div>       
                        <div class="col-10">${motorista.nombre}</div>
                        <div  class="col-2">Correo:</div>       
                        <div class="col-10">${motorista.correo}</div>
                        <div  class="col-2">Número:</div>        
                        <div class="col-10">${motorista.numero}</div>
                    </div>

                    <div class= "row col-3">
                    <button id="boton" onclick="aprobarmotorista()">Aprobado                  
                       <i class="fa-solid fa-check" style="color:#00ee00; font-size:2.7rem"></i>    
                    </button> 
                    </div>
                    </div>
        
                    </div>
                    
                 </div>
        
        </div>`;
    
    });


}
    
generarMotoristas();