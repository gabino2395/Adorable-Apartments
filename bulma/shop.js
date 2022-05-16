//objetos

const products = [
    { id: 1, name: 'Sombreros de playa', price:  2200, img: "https://i.pinimg.com/474x/72/93/4d/72934d54964866b482ebf79c2df60aeb.jpg" },
    { id: 2, name: 'velas aromaticas ', price:  600, img: 'https://i.pinimg.com/564x/b0/3f/09/b03f098563f5b493d3604c7dcd0fc01b.jpg' },
    { id: 3, name: 'cepillos de bambu', price:  1500, img: 'https://i.pinimg.com/474x/7e/84/f8/7e84f81cbee05ed2bd4f656c7b6ac9c2.jpg' },
    { id: 4, name: 'shampoo solido organico', price: 700, img: 'https://http2.mlstatic.com/D_NQ_NP_752421-MLA41972998872_052020-W.jpg' },
    { id: 5, name: 'Aprende a surfear', price:  1800, img: 'https://i.pinimg.com/564x/26/bd/0f/26bd0fe84aa57566c756725917ceafcb.jpg' },
    { id: 6, name: 'Clases de yoga', price: 1000, img: 'https://i.pinimg.com/474x/53/a6/ec/53a6ec3daf4982031eea7284514a3630.jpg' },
    { id: 7, name: 'Medita frente al mar', price: 900, img: 'https://i.pinimg.com/564x/a1/d5/2c/a1d52c2ba21a1ccf83ad2d497a6e3645.jpg' },
    { id: 8, name: 'Conoce tu carta natal', price: 2000, img: 'https://i.pinimg.com/474x/4e/b2/a7/4eb2a74ad161a50464600175699d97d0.jpg' }

]

const contenedorProduct = document.querySelector('.contenedor-productos')
const productoFavorito=[]
const listadoFavoritos = document.querySelector('.listado-favoritos')
const contenedorFavoritos =document.querySelector('.contenedor-favoritos')
// // guardamos los objetos en forma texgto JSON
const guardarLocal=(key,value) =>{
    localStorage.setItem(key,value)
 }

 for(const product of products){
      guardarLocal(product.id,JSON.stringify(product)) }
  guardarLocal('carrito',JSON.stringify(products))


document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})
//funcion para mostrar productos
function mostrarProductos() {

    products.forEach(product => {

        //scripting

        const divProducts = document.createElement('div')
        divProducts.classList.add('card')

        //        divProducts.className.addEventListener('container')
        const imgProduct = document.createElement('img')
         imgProduct.src = product.img
         imgProduct.classList.add('product-image')
         
        

        const tituloProduct = document.createElement('h3')
        tituloProduct.textContent = product.name
        tituloProduct.classList.add('product-especifics')

        const precioProduct = document.createElement('p')
        precioProduct.textContent = product.price+" $"
        precioProduct.classList.add('product-price')
     

        
        const btnFavorito = document.createElement('btn-primary')
        btnFavorito.className = "btn-favorito  "
        btnFavorito.textContent = 'agregar a favoritos'
        btnFavorito.onclick= ()=>{
            agregarAfavorito(product.id)
            guardarCarrito()
            // agregado(product.name)
        }

         divProducts.appendChild(imgProduct)
         divProducts.appendChild(tituloProduct)
         divProducts.appendChild(precioProduct)
         divProducts.appendChild(btnFavorito)
         
        contenedorProduct.appendChild(divProducts)

    })
}
///////
function guardarCarrito(){

    const carrito=(key,value) =>{
        localStorage.setItem(key,value)
     }
    
     for(const product of products){
          carrito(product.id,JSON.stringify(product)) }
      carrito('carrito2',JSON.stringify(products))
}
////////
//funcion para agregar a favoritos
function agregarAfavorito(id){
    
    
    document.addEventListener('DOMContentLoaded', () => {
        mostrarProductos();
    })
    const productSeleccionado = products.find(product=> product.id ===id)
productoFavorito.push(productSeleccionado)
mostrarProductosFavoritos(productoFavorito)
}
function mostrarProductosFavoritos(favoritos){
    listadoFavoritos.innerHTML=""
    favoritos.forEach(product => {

        //scripting
      const divFavoritos=document.createElement('div')
      divFavoritos.classList.add('div-favoritos')
divFavoritos.textContent=`<h3>tus elegidos</h3>`


        const divProducts = document.createElement('div')
        divProducts.classList.add('card2')

        //  divProducts.className.addEventListener('container')
         const imgProduct = document.createElement('img')
          imgProduct.src = product.img
          imgProduct.classList.add('product-image2')
         
        

        const tituloProduct = document.createElement('h3')
        tituloProduct.textContent = product.name
        tituloProduct.classList.add('product-especifics2')

        const precioProduct = document.createElement('p')
        precioProduct.textContent = product.price+" $"
        precioProduct.classList.add('product-price')
        console.log(divProducts)


        

         divProducts.appendChild(imgProduct)
         divProducts.appendChild(tituloProduct)
         divProducts.appendChild(precioProduct)
         divFavoritos.appendChild(divProducts)
         
        listadoFavoritos.appendChild(divProducts)
        

    })
}


function agregado(){
    Toastify({
        text: `Producto ${product.name} [${product.id}] agregado!`,
        className: "info",
        duration: 3000
    }).showToast();
}

// Mostrar los productos en el HTML
let htmlProducts = ''
products.forEach(product => {
    htmlProducts += `
        <div id='p-${product.id}' class='col-sm'>
            <p>${product.name}</p>
            <img src='${product.img}' height=200px width=150px />

            <button class='add'>Agregar</button>
            <button class='remove'>Remover</button>
        </div>
    `
})  
