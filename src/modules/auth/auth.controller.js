const { AuthMessage } = require("./auth.messages")
const authService = require("./auth.service")
const autoBind=require("auto-bind")

class AuthController{
    #service
        constructor(){
            autoBind(this)
            this.#service=authService
        }
    async sendOTP(req,res,next){
        try {
            const {mobile}=req.body
            const result=await this.#service.sendOTP(mobile)
            return{
                message:AuthMessage.sendOtpSeccessfully
            }
            
        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}

module.exports=new AuthController()