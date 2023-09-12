const User = require('../../models/user')

async function create(req,res){
    try {
        const user = await User.create(req.body)
        console.log(user);
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }



    // res.json({
    //     user: {
    //         name: req.body.name,
    //         email: req.body.email
    //     }
    // })
}





module.exports = {
    create
}