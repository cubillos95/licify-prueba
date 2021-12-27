const admin = require('firebase-admin')
var serviceAccount = require("../licitydb-firebase-adminsdk-aqnn8-5ec371a263.json");

const ulFire = "https://licitydb-default-rtdb.firebaseio.com/"

//******************************************************* */

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL: ulFire
})

db = admin.database()
//******************************************************* */
const firedb = {
    //******************************************************* */
    //subir  datos
    subirDatos:(dato)=> new Promise((resolve) => {
        db.ref('productos').push(dato,(err,resul)=>{
            if(err)resolve('Error')
            else{resolve('dato Agregado')}
        })
    }),
    //****************************************************** */
    //consultar
    consultar:()=>new Promise((resolve) => {
        db.ref('productos').once('value',(resul) =>{
           resolve(resul)
        })
    }),
     //****************************************************** */
     //remover
     remover:(id)=>new Promise((resolve) => {
        db.ref('productos/'+ id).remove((resul) =>{
            resolve('dato Eliminado')
        })
     }),
     //****************************************************** */
     //Actualizar
     Actualizar:(id,dato)=>new Promise((resolve) => {
        db.ref('productos/'+ id).update(dato,(resul)=>{
            resolve('dato Actualizado')
        })

     })
}

exports.firedb = firedb;