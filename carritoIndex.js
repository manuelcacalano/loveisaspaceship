let shoppingCart
CarritoLS=JSON.parse(localStorage.getItem(`CarritoLS`));
if (CarritoLS){
    shoppingCart=CarritoLS
}else{
    shoppingCart=[]
}
/* agregar productos*/

const addProduct = (productoId) => {
    const renderCartProducts=() => {
        let producto = productos.find(producto => producto.id==productoId)
        shoppingCart.push(producto)
    }
    renderCartProducts()
}


/*render carrito*/

const showCart = () => {
    const cart = document.getElementById ("carrito-contenedor")

    //limpiar carrito
    cart.innerHTML = ""

    //renderizar items

    shoppingCart.forEach(producto=>{
        let div = document.createElement("div")
        div.classList.add("productoEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button type="button" id="deleteOnCart(${producto.id})" class="btn btn-danger">Eliminar</button>`;
        
        cart.appendChild(div)
const guardarCarrito = (clave,valor)=>{localStorage.setItem(clave,valor)};
       guardarCarrito("CarritoLS",JSON.stringify(shoppingCart));
        //eliminar del carrito
        const boton = document.getElementById(`deleteOnCart(${producto.id})`)
        boton.addEventListener ('click',()=>{
            deleteOnCart(producto.id)
        })

    });

    //precio total
    const totalPrice=document.getElementById('totalPrice')
    totalPrice.innerText = shoppingCart.reduce((acumulador, item)=>acumulador + item.precio,0)
}

//funcion eliminar carrito

const deleteOnCart = (productoId) => {
    const item = shoppingCart.find((producto)=>producto.id===productoId)
    const index = shoppingCart.indexOf(item)
    shoppingCart.splice(index, 1)
    showCart()
}
