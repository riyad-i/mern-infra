const User = require('../../models/user')

const jwt = require('jsonwebtoken')


async function create(req,res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        res.status(400).json(error)
    }
}


function createJWT(user){
    return(jwt.sign(
        //data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}

    ))
}



async function login(req, res){
    //find user by email
    //compare password with hashed password
    //create token
}



module.exports = {
    create,
    login
}