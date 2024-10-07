const {errorHandler} = require('../error');
const reservationModel = require('../models/user');

const reservation = async (req,res,next)=>{
    const {firstName,lastName,email,time,date} = req.body;
    if(!firstName || !lastName || !email || !time || !date){
        return next(new errorHandler("plz fill full reservation form ",400))
    }
    try{
    await reservationModel.create({firstName,lastName,email,time,date});
    res.status(200).json({
        success:true,
        message:"Reservation is completed successfully"
    })
    }catch(error){
    if(error.name === "ValidationError"){
        const ValidationError = Object.values(error.errors).map(
            (err)=>err.message
        )
        
    return next(new errorHandler(ValidationError.join(" , "),400))
    }
    return next(error)
    }
}

module.exports = reservation