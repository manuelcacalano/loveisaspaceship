/*const mostrarProductos = (productos) => {
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
            Swal.fire(`Agregaste ${producto.desc} al carrito!`)
        })
      
    })
}


mostrarProductos(productos)
*/


////tp fetch
let productos = []

const traerDatos = async () => {
    const respuesta = await fetch('../stock.json' , {mode: "no-cors"});
    const data = await respuesta.json();
    let listado = document.getElementById("producto-contenedor");
    productos=[...data]
    productosOrig=[...data]
    productos.forEach( item => {
        const div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML += `<div class="card" style="width: 18rem;">
                            <img src="${item.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.nombre}</h5>
                                <p class="card-text">Descripción:  ${item.desc}</p>
                                <p class="card-text">Precio:$ ${item.precio}</p>
                                <button class="btn btn-primary" id=boton${item.id}>Añadir al carrito</button>
                            </div>
                        </div>`;

        listado.appendChild(div);
        const boton = document.getElementById( `boton${item.id}` )

        boton.addEventListener('click', ()=> {
            addProduct(item.id)
            showCart(item)
            console.log(shoppingCart);
            Swal.fire(`Agregaste ${item.desc} al carrito!`)}
        )
    });
};
traerDatos();