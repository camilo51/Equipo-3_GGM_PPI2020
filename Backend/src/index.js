const express = require ('express');
const app = express();
const usuario = require('./routes/usuarios');
const cors = require('cors');

// Puerto
app.set('port', 3001);
app.use(cors({origin: '*'}));

// Middleware
app.use(express.json());

// Rutas
app.use('/api',usuario)

app.listen(app.get('port'),()=>{
	console.log(`Servidor corriendo en el puerto ${app.set('port')}`);
});
