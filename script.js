let productos = [
    {id:1 , nombre: "pelota" , precio: Number(prompt("Ingrese un precio:"))},
    {id:2 , nombre: "botines" , precio: Number(prompt("Ingrese un precio:"))},
    {id:3 , nombre: "medias" , precio: Number(prompt("Ingrese un precio:"))},
    {id:4 , nombre: "short" , precio: Number(prompt("Ingrese un precio: ")) },
]
let porcentaje = productos.map((producto) => {
    producto.precio = (producto.precio * 0.50).toFixed(2)
    return producto.precio
})
alert("los precios con 50% de descuento: " + porcentaje)
