let productos = [
    {id:1,  categoria:"placa de video" ,nombre:"RTX 4090" , precio:200000 , stock: 5 , imgUrl: 
    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/10/analisis-nvidia-rtx-4090-founders-edition-2839429.jpg?itok=9uItxwg-" },
    {id:2,  categoria:"procesadores" , nombre: "AMD Ryzen 5600X" , precio: 60000, stock: 25, imgUrl: 
    "https://d2r9epyceweg5n.cloudfront.net/stores/001/418/967/products/amd-ryzen-5-5600x-review111-fbb9972397939cc46016210994289725-640-0.jpg"},
    {id:3, categoria:"almacenamiento", nombre: "SSD KINGSTON A500", precio: 9000 , stock: 60, imgUrl: 
    "https://www.brandimia.com/productos/SA400S37-240G.jpg" },
    {id:4, categoria:"perisfericos" , nombre: "Auricular RedDragon" , precio: 5000, stock: 100, imgUrl: 
    "https://redragon.es/content/uploads/2021/04/2-6.png" },
]
let carrito = []
let contenedor = document.getElementById("contenedorProductos")
contenedor.className = "contenedor"
let buscador = document.getElementById("buscador")
buscador.addEventListener("input", renderizarProductosFiltrados)
function renderizarProductosFiltrados() {
    let productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()) || producto.categoria.toLowerCase().includes(buscador.value.toLowerCase()))
    renderizarProductos(productosFiltrados)
}



renderizarProductos(productos)
function renderizarProductos(arrayDeProductos) {
   contenedorCarrito.innerHTML = "" 

for (const producto of arrayDeProductos) {

    let tarjetaProductos = document.createElement("div")
    tarjetaProductos.className = "producto"
    tarjetaProductos.innerHTML = tarjetaProductos.innerHTML + `<img src=${producto.imgUrl}>`
    tarjetaProductos.innerHTML = tarjetaProductos.innerHTML + `<h3>${producto.nombre}</h3>`
    tarjetaProductos.innerHTML = tarjetaProductos.innerHTML + `<p>$${producto.precio}</p>`
    tarjetaProductos.innerHTML = tarjetaProductos.innerHTML + `<p>Quedan ${producto.stock} u.</p>`
    tarjetaProductos.innerHTML = tarjetaProductos.innerHTML + `<button class="boton" id=${producto.id}>Añadir al carrito</button>`
    




    contenedor.appendChild(tarjetaProductos)
    }
    let botones = document.getElementsByClassName("boton")
    for (const boton of botones) {
    boton.addEventListener("click", agregarAlCarrito)
    }

}
function agregarAlCarrito(e) {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
    let posicionDelProductoBuscado = carrito.findIndex(producto => producto.id == productoBuscado.id)
    if (posicionDelProductoBuscado != -1) {
        carrito[posicionDelProductoBuscado].unidades++
        carrito[posicionDelProductoBuscado].subtotal = carrito[posicionDelProductoBuscado].unidades * carrito[posicionDelProductoBuscado].precioUnitario
    } else{
        carrito.push({id: productoBuscado.id, nombre: productoBuscado.nombre , precioUnitario: productoBuscado.precio , unidades: 1, subtotal: productoBuscado.precio})
    }
    renderizarCarrito(carrito)
}

function renderizarCarrito(arrayDeProductos) {
    contenedorCarrito.innerHTML = ""
    for (const producto of arrayDeProductos) {
        contenedorCarrito.innerHTML += 
        `<div>
        <p>
        ${producto.nombre}
        $${producto.precioUnitario}
        ${producto.unidades}
        $${producto.subtotal}
        </p>
        </div>`
    }
    
}
let botonComprar = document.getElementById("comprar")
botonComprar.addEventListener("click", () => {
    localStorage.removeItem("carrito")
    carrito = []
    renderizarCarrito(carrito)
    alertPersonalizado("Gracias por su compra", "success","cerrar")
})
function alertPersonalizado(texto,icono,boton) {
    Swal.fire({
        text: texto,
        icon: icono,
        confirmButtonText: boton
      })
    
}