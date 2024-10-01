const signUp = (req,res,next) =>{
    res.status(200).json({
        status:'success',
        message:'sign up working'
    })
}

module.exports = {signUp};