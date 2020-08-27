const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const token = await req.header("auth-token")
    if(!token) return res.status(401).send("UnAuthorized Access Denied")

    try {
        if(token){
            const verified = await jwt.verify(token, process.env.TOKEN_SECRET)
            req.user = verified
            next()
        }
    }catch (error) {
        res.status(400).send("Token Invalid")
    }
}