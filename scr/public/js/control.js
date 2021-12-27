
import { crear } from "./modules/contructor.js"
import { llamada } from "./modules/ajax.js"
//***************************************************************** */
//Aumento de casillas
window.document.getElementById('comprasButton').addEventListener('click', x => {
    crear.crearForm()
})
//***************************************************************** */
//peticion get
try {
    if (window.document.getElementById('selectorBusqueda').value) {
        llamada.solicitudGet("/Consultar").then(x => {
            let data = JSON.parse(x)
            Object.keys(data).filter(keys => {
                localStorage.setItem(keys, JSON.stringify(data[keys]))
            })
            if (localStorage.getItem('keys')) { localStorage.removeItem('keys') }
            localStorage.setItem("keys", JSON.stringify(Object.keys(data)))
            crear.selector("selectorBusqueda")
        })
    }
}
catch (e) { }

//************************************************************ */
//Selector id
try {
    window.document.getElementById('selectorBusqueda').addEventListener('click', x => {
        crear.imprimir(localStorage.getItem(x.target.value))
    })
}
catch (e) { }

//************************************************************* */
//Eliminar

try {
    if (window.document.getElementById('selectorEliminar').value) {
        llamada.solicitudGet("/Consultar").then(x => {
            let data = JSON.parse(x)
            Object.keys(data).filter(keys => {
                localStorage.setItem(keys, JSON.stringify(data[keys]))
            })
            if (localStorage.getItem('keys')) { localStorage.removeItem('keys') }
            localStorage.setItem("keys", JSON.stringify(Object.keys(data)))
            crear.selector("selectorEliminar")
        })
    }
}
catch (e) { }
//************************************************************ */
//Enviar Eliminar id

try {
    window.document.getElementById('EliminarDato').addEventListener('click', x => {
        const id = document.getElementsByTagName('select')['selectorEliminar'].selectedOptions[0].value
        if (id != "Id Factura") {
            llamada.solicitudPos("/EliminarDato", JSON.stringify({ id:id })).then(x => { 
                alert('Dato Eliminado'), 
                localStorage.removeItem(id)
                window.location.replace("/borrar")})
        }


    })
}
catch (e) { }