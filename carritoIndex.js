let carritoDeCompras = []

const carritoIndex = (productoId)=>{

    
    const contenedorCarrito = document.getElementById("carrito-contenedor")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carritoDeCompras.push(producto)
        console.log(carritoDeCompras);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>`;
        contenedorCarrito.appendChild(div)
    }

    renderProductosCarrito()
}

localStorage.setItem("carritoLS", JSON.stringify(contenedorCarrito));
const carritoLS = JSON.parse(localStorage.getItem('carritoLS'));