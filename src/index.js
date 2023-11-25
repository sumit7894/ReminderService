const express = require('express');
const bodyParser = require('body-parser');
// const {sendBasicEmail} = require('./service/email-service')
const {PORT} = require('./config/serverConfig')
const jobs = require('./utils/job')
const TicketController = require('./controllers/ticket-controller')
const {createChannel} = require('./utils/messageQueue')
const setupAndStartServer = async ()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.post('/api/v1/tickets',TicketController.create);
    

    app.listen(PORT,()=>{
        console.log(`Server started at PORT ${PORT}`)
        
        
        
        // jobs();
        // sendBasicEmail(
        //     'support@reminderservice.com',
        //     'smithdashdash@gmail.com',
        //     'This is testing email',
        //     'Hey, how are you doing! Hope you are doing great'
        // );
    })
}
setupAndStartServer(); 