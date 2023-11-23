const express = require('express');
const bodyParser = require('body-parser');
const {sendBasicEmail} = require('./service/email-service')
const {PORT} = require('./config/serverConfig')
const setupAndStartServer =()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))
    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
        sendBasicEmail(
            'support@reminderservice.com',
            'smithdashdash@gmail.com',
            'This is testing email',
            'Hey, how are you doing! Hope you are doing great'
        );
    })
}
setupAndStartServer(); 