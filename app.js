const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("producto-contenedor")

    productos.forEach(producto => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Añadir al carrito</button>
                            </div>
                        </div>`

        contenedorProductos.appendChild(div)
        
        const boton = document.getElementById( `boton${producto.id}` )

        boton.addEventListener('click', ()=> {
            addProduct(producto.id)
            showCart(producto)
            console.log(shoppingCart);
        })
      
    })
}


mostrarProductos(productos)

let usuario
let usuarioLS = JSON.parse(localStorage.getItem("usuario"));
if(usuarioLS){
    usuario=usuarioLS
}else{usuario = {
    nombre:prompt(`Ingrese su nombre`),
    cel:parseInt(prompt("Ingrese su número de teléfono"))
}}



const {nombre, cel} = usuario   //Desestructuración

localStorage.setItem("usuario", JSON.stringify(usuario));