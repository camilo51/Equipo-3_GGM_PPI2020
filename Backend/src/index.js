const express = require ('express');
const app = express();
const routes = require('./routes/routes');

// Puerto
app.set('port', 3000);

// Middleware
app.use(express.json());

// Rutas
app.use('/api',routes)

app.listen(app.get('port'),()=>{
	console.log(`Servidor corriendo en el puerto ${app.set('port')}`);
});
