const formulario = document.querySelector("#formulario-api")
const inputBusqueda = document.querySelector(".termino")
const divResultado = document.querySelector("#resultado")
//eventos
formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    validarFormulario()
})

function validarFormulario() {
    const terminoBusqueda = inputBusqueda.value
    if (terminoBusqueda == "") {
        mostrarAlerta("debes escribir algo")
        return

    }
    buscarBusqueda(terminoBusqueda)
    inputBusqueda.value=""

}
function buscarBusqueda(termino) {
   


    const url_base = "https://pixabay.com/api/"
    const api_key = "27318522-7cb056ba73e8f2121d61ea9d2"
    const url = `${url_base}?key=${api_key}&q=${termino}&image_type=photo&pretty=true`
    console.log(url)
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(data => {
        if(data.hits.length===0){
            mostrarAlerta("no hay imagenes para ese termino de busqueda")
        }
     mostrarResultados(data.hits)
    })
}

function mostrarResultados(imagenes = []){
divResultado.innerHTML=""

  imagenes.forEach(imagen =>{
      const divImagen=document.createElement('div')
      divImagen.classList.add('cardApi')

      const img = document.createElement('img')
      divImagen.classList.add('cardApi2')
      img.src = imagen.previewURL

    //   const likes = document.createElement('p')
    //   likes.textContent="likes : " + imagen.likes 


    //   const views = document.createElement('p')
    //   views.textContent="views : " + imagen.views 

      const link = document.createElement('a')
      link.classList.add("btn-imagenApi")
      link.target="_blank"
      link.textContent="ver mas"
      link.href= imagen.largeImageURL

      divImagen.appendChild(img)
    //   divImagen.appendChild(likes)
    //   divImagen.appendChild(views)
      divImagen.appendChild(link)

      divResultado.appendChild(divImagen)

  })
}

function mostrarAlerta(mensaje) {
const divAlert=document.createElement('div')
divAlert.classList.add('alerta')

const mensajeAlerta = document.createElement('p')
mensajeAlerta.textContent=  mensaje
divAlert.appendChild(mensajeAlerta)
formulario.appendChild(divAlert)
setTimeout(()=>{
    divAlert.remove()
},2000)
    console.log(mensaje)
}
