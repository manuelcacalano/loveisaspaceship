function saludar(){
    let nombre=prompt("Ingrese su nombre"); 
    let mensaje=`Bienvenido ${nombre}, a continuación ingrese el importe a pagar de su pedido`;
    if(nombre==("")){
        alert(`Ingrese un nombre correcto`);
        let nombre=prompt("Ingrese su nombre"); 
    }else {
    alert(mensaje);
}
} 
function importe(){
    let agregarProducto=true;
    let importeTotal=0;
    while(agregarProducto){
        let nuevoImporte = parseInt( prompt("Ingrese el importe a pagar") );
        importeTotal+=nuevoImporte ;
        agregarProducto = confirm ("Desea agregar otro importe?");
    } 
    let importeFinal = importeTotal*1.15;  /*Service Charge*/
    alert(`Su importe final es de $ ${importeFinal}`);
}
saludar();
importe();



