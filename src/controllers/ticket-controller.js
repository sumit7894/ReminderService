const TicketService = require('../../src/service/email-service');

const create = async (req,res) =>{
    try {
        const response = await TicketService.createNotification(req.body);
        console.log("Sending in controller",req.body);
        return res.status(201).json({
            success:true,
            data: response,
            err:{},
            message:'Successfully registered an email reminder'
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            data: {},
            err:error,
            message:'Unable to register an email reminder'
        })
    }
}

module.exports = {
    create
}