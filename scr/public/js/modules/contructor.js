

//creacion de elementos
let numerodeProductos = 0
const crear = {
    //*************************** */
    crearForm: () => {
        var formulario = document.createElement("div");
        formulario.className = "row"
        formulario.innerHTML = "<div class='col'>" +
            "<input type='text' class='form-control' placeholder='Producto' name='Producto" + numerodeProductos + "'></div>" +
            "<div class='col'><input type='text' class='form-control' placeholder='Costo' name='Costo" + numerodeProductos + "'></div>" +
            "<div class='col'><input type='text' class='form-control' placeholder='Iva' name='Iva" + numerodeProductos + "'><br></div>"

        document.getElementById('comprasIndividuales').appendChild(formulario)
        numerodeProductos++
    },
    //********************************* */
    //Selector
    selector: (id) => {

        const keys = localStorage.getItem('keys')
        JSON.parse(keys).filter(x => {
            var add = document.createElement('option');
            add.value = x;
            add.innerHTML = x
            document.getElementById(id).add(add);
        })
    },
    //******************************** */
    //imprimir busqueda
    imprimir:(dato)=>{
        let inf = JSON.parse(dato)
        window.document.getElementById('idProducto').innerHTML  = "id = " + inf.id
        window.document.getElementById('valorProducto').innerHTML  = "valor  = " + inf.valorTotal
        window.document.getElementById('ivaProducto').innerHTML  = "iva = " + inf.ivaTotal
        window.document.getElementById('pago').innerHTML  = "pagado = " + inf.pagado
        Object.keys(inf).filter(keys => {
            if(keys != "id" && keys != "valorTotal" && keys != "ivaTotal"  && keys != "pagado"){
            }
        })
        
        console.log(inf)
    }


}


export { crear }