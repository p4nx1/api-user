// api-user/app.js
const express = require('express');
const app = express();
const port = 8765;
app.get('/users', (req, res, error) => {
   res.status(200).send('Envío usuarios');
});
app.listen(port, error => {
    if (error) {
        console.log(error);
    }
    console.log('Servicio levantado correctamente en ' + port);
});