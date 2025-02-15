const { ValidateSignature } = require('../../utils');

module.exports = async (req,res,next) => {
    console.log(req);
    
    const isAuthorized = await ValidateSignature(req);

    if(isAuthorized){
        return next();
    }
    return res.status(403).json({message: 'Not Authorized'})
}