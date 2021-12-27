
const bcrypt = require('bcrypt')


//****************************************************************** */
const passwor = "$2b$10$zSL4DbZ8ZMvap4y.6mrIYOeGTN8sD0/3JJzgROHPEXIcy6f/KQz0O"
//****************************************************************** */
const loginUser = {
    //****************************************************************** */
    //Autenticar Login
    autenticarLogin: (name, passw) => new Promise((resolve, reject) => {
        if (name == "admin") {
            bcrypt.compare(passw, passwor, (err, res) => {
                if (err) { resolve(false) }
                else{resolve({res: res})}
            })
        }
        else{resolve(false)}
    })
}
//****************************************************************** */
exports.login = loginUser;