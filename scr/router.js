const express = require('express');
const router = express.Router()
var destroy = require('destroy')
const { send } = require('process');
//*********************************************************** */
//crear pass
//bcrypt.hash(date, numcrypt, (err, pass) => {
//console.log(pass)
//})
var session;      //variable para guardar la secion
//******************************************************************* */
//modulo
const Login = require('./modules/form.js')
const firedb = require('./modules/firedb.js')
//******************************************************************** */
//*********************************************************** */
//Logit
router.get("/login", (req, res) => {
    res.render('logit')
})

//pagina Inicio
router.get("/form", (req, res) => {
    session = req.session;
    if (session.userid) {
        res.render('form')
    }
    else { res.redirect('/login'); }
})
//Leer
router.get("/leer", (req, res) => {
    session = req.session;
    if (session.userid) {
        res.render('leer')
    }
    else { res.redirect('/login'); }
})
//borrar
router.get("/borrar", (req, res) => {
    session = req.session;
    if (session.userid) {
    res.render('eliminar')
    }
    else { res.redirect('/login'); }
})


//******************************************************************* */
//subirFormulario
router.post("/subirForm", (req, res) => {
    session = req.session;
    if (session.userid) {
    firedb.firedb.subirDatos(req.body).then(x => res.redirect("/form"))
    }
    else { res.redirect('/login'); }
})

//****************************************************************** */
//Leer data
//************************************************************ */
//consultar datos
router.get('/Consultar', (req, res) => {
    session = req.session;
    if (session.userid) {
    firedb.firedb.consultar().then(x => res.send(x))
    }
    else { res.redirect('/login'); }
})

//****************************************************************** */
//Eliminar dato
router.post("/EliminarDato", (req, res) => {
    session = req.session;
    if (session.userid) {
    firedb.firedb.remover(req.body.id).then(x => res.send(x))
    }
    else { res.redirect('/login'); }
})


//******************************************************************* */
router.post("/userlogin", (req, res) => {
    const { User, pass } = req.body
    Login.login.autenticarLogin(User, pass).then(x => {

        if (x.res) {
            session = req.session;
            session.userid = "0111"
            res.render('form')
        }
        else {
            res.redirect('/login');
        }
    })
})

//********************************************************************/
//cerrar session
router.get('/logout', (req, res) => {
    req.session.destroy();
    //destroy(req.session)
    res.redirect('/login');
});






module.exports = router
