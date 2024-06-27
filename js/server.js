const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Cambia el puerto según sea necesario

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { nombre, correo, tipo, fecha, hora } = req.body;

    // Configuración de Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'clinicalaperlatap@gmail.com', // Reemplaza con tu correo
            pass: 'prhf wwri rxwf euqy' // Reemplaza con tu contraseña de aplicación
        }
    });

    const mailOptions = {
        from: correo,
        to: 'destinatario@gmail.com', // Dirección de destino
        subject: 'Nueva Cita Agendada',
        html: `
            <strong>Nombre:</strong> ${nombre}<br>
            <strong>Correo:</strong> ${correo}<br>
            <strong>Tipo de Cita:</strong> ${tipo}<br>
            <strong>Fecha:</strong> ${fecha}<br>
            <strong>Hora:</strong> ${hora}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            res.json({ success: false, error });
        } else {
            console.log('Correo enviado:', info.response);
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});