
class Cliente {

  constructor(guest, duracionEstadia, checkIn, checkOut, room, estadia,) {
    this.guest = guest;
    this.room = room;
    this.checkIn = checkIn;
    this.checkOut = checkOut;
    this.duracionEstadia = duracionEstadia;
    this.estadia = duracionEstadia * 100
  }
}
let divEnd=document.getElementById("payment")
let nombreUsuario;
document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e) {
  e.preventDefault();
  nombreUsuario = document.getElementById("user").value;

  let listadodeClientes = document.getElementById("listadodeClientes");

  const clientes = JSON.parse(localStorage.getItem(nombreUsuario));

  if (clientes == null) {
    listadodeClientes.innerHTML = '<h1 class="h1-form" >No tienes reservas hechas, reserva ahora!</h1>'
  } else {
    mostrarClientes(clientes);
  }
  mostrarPanel();
  e.target.reset()
}
function mostrarClientes(clientes) {
  let listadodeClientes = document.getElementById("listadodeClientes");
  listadodeClientes.innerHTML = "";
  // NUEVO: metodo desconstructor
  clientes.forEach(({ guest, duracionEstadia, checkIn, checkOut, room }) => {
    let li = document.createElement("li");
    li.innerHTML = `<hr>  elegiste departamento ${room} - ${guest} huespedes - tu check-in sera  ${checkIn} -  tu check-out sera ${checkOut} estaras ${duracionEstadia} noches-  y el precio final  es de ${duracionEstadia * 100} $- `;

    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
      eliminarCliente(Cliente);
    })
    li.appendChild(botonBorrar);
    const botonReservar = document.createElement("button");
    botonReservar.innerText = "pagar ";
    botonReservar.addEventListener("click", () => {
      reservar();
    })
    li.appendChild(botonReservar);
    listadodeClientes.appendChild(li);

  });
}
function eliminarCliente(cliente) {
  
  
/// NUEVO : cuando el cliente quiere borrar una reserva envia una alerta del sweet alert
 Swal.fire({
  title: 'Estas seguro?',
  text: "no podras revertir esto si eliminas!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Si, eliminar!'
}).then((result) => {
  if (result.isConfirmed) {
    const clientesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = clientesEnLocalStorage.filter(item => item.titulo != cliente.titulo);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarClientes(nuevoArray);
    Swal.fire(
      'Borrado!',
      'Tu reserva ha sido eliminada con exito!.',
      'success'
      )
    }
    })
  
}
  
  
  function mostrarPanel() {
    const opciones = document.getElementById("opciones");
    
    opciones.innerHTML =
    
    `<div class="section-check">
    
    <h3>Bienvenido ${nombreUsuario}</h3>
    <div  class="container-check"> 
    <div class="contenedor-check">
    <form id="formulario-cliente">
    <input type="date" name="" id="check-in" placeholder="check-in">
    <input type="date" name="" id="check-out" placeholder="check-out">
    <input type="number" id="duracion-estadia" placeholder="cantidad de noches">
    <input type="text" id="habitacion" placeholder="¿departamento 1 o 2?">
    <input type="number" id="guest" placeholder="guests">
    <button   class="btn btn-primary btn-lg enviar " type="submit">reservar</button>
    </form>
    </div>
    </div>         
    </div>`;
    document.getElementById("formulario-cliente").addEventListener("submit", agregarCliente);
  }
  
  function agregarCliente(e) {
    e.preventDefault();
    const room = document.getElementById("habitacion").value;
    const checkIn = document.getElementById("check-in").value;
    const checkOut = document.getElementById("check-out").value;
    const duracionEstadia = document.getElementById("duracion-estadia").value;
    const guest = document.getElementById("guest").value;
    
    
    
    
    const cliente = new Cliente(guest, duracionEstadia, checkIn, checkOut, room);
    
  
    const clientesEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario))
    
    
    if (clientesEnLocalStorage == null) {
      localStorage.setItem(nombreUsuario, JSON.stringify([cliente]));
      mostrarClientes([cliente]);
    } else {
      clientesEnLocalStorage.push(cliente);
      localStorage.setItem(nombreUsuario, JSON.stringify(clientesEnLocalStorage));
      mostrarClientes(clientesEnLocalStorage);

    }
    e.target.reset();
    
    
    
  }
  function reservar(e){
    const divPay= document.createElement('div')
    divPay.classList.add('divPay')
    divPay.innerHTML=`<form class="credit-card">
    <div class="form-header">
    <h4 class="title"></h4>
    </div>
    
    <div class="form-body">
    <!-- Card Number -->
    <input type="text" class="card-number" placeholder="Card Number">
    
    <!-- Date Field -->
    <div class="date-field">
    <div class="month">
    <select name="Month">
    <option value="january">January</option>
    <option value="february">February</option>
    <option value="march">March</option>
    <option value="april">April</option>
    <option value="may">May</option>
    <option value="june">June</option>
    <option value="july">July</option>
    <option value="august">August</option>
    <option value="september">September</option>
    <option value="october">October</option>
    <option value="november">November</option>
    <option value="december">December</option>
    </select>
    </div>
    <div class="year">
    <select name="Year">
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
    <option value="2024">2024</option>
    </select>
    </div>
    </div>
    
    <!-- Card Verification Field -->
    <div class="card-verification">
    <div class="cvv-input">
    <input type="text" placeholder="CVV">
    </div>
    <div class="cvv-details">
    
    </div>
    </div>
    
    <!-- Buttons -->
    <button type="submit" class="proceed-btn "><a href="#" class="text-button">finalizar pago</a></button>
    
    </div>
    </form>`
    
    divEnd.appendChild(divPay)
    e.target.reset();
  }

 
  
  