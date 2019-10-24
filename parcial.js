// punto 1 
const express = require('express');
const router = express.Router(); 
 
let datos = '';  //El error se puede deber que no esta pidiendo el valor del _ID 
                 //debe primero capturar el valor para que en la siguiente linea pueda comparar e iniciar a buscar  
  
let datos = require('./datos.json'); 
 
router.post('/info/obtenerClientePorId', async (req, res) => { 
 
    let clienteTarget;   
     for (let i = 0; i < datos.length; i++) {         
         if (req.body._id === datos[i]._id) {             
             clienteTarget = datos[i];             
             break;         
            }    
         } 
 
    res.json(         
        status: 'Ok',         
        data: clienteTarget     
        ); 
    }); 

 //**************************************************************************** */
    // suma de dos numeros punto 2

    router.post('./calculadora/sumaEnIntervalo', (req, res) => {
    
        var a;
        var b;
        var resultado;
        for (i = a; i <= b; i++) {
            resultado = resultado + i;
        }    
        res.json({
            data: resultado
        });
    });
    

    //********************************************************************************************** */
// Limpiar cartera, por que utilizo el ejemplo de este codigo ya que el me ubica el _id, osea esto quiere decir 
//que ya tendria el 80% del ejercicio ahora solo faltaria hacer la sentencia DELETE.

const express = require('express');
const router = express.Router(); 
 
 
router.post('./info/limpiarCarteraGlobal', async (req, res) => { 
 
          delete carteraPendiente;    
              
    res.json(         
        status: 'Ok',         
        data: cartera;    
        ); 
    }); 



    //**************************************************************************************** */
    // ruta del cliente que mas ha comprado 

const express = require('express');
const router = express.Router(); 

let datos = require('./datos.json');   

router.post(' ./info/obtenerDatosMejorCliente', async (req, res) => { 
 
    let productosComprados;   
    
     for (let i = 0; i >= productosComprados; i++) {         
         productosComprados = productosComprados;  
         } 
 
    res.json(         
        status: 'Ok',         
        data: nombre;
        data2: email;     
        ); 
    }); 