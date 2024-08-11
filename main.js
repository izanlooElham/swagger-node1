const express=require("express")
const dotenv=require("dotenv")
const { swaggerConfig } = require("./src/config/swagger.config")
const { mainRouter } = require("./app.routes")
dotenv.config()

async function main(){
    const app=express()
    const port=process.env.PORT
    require("./src/config/mongoose.config")
    swaggerConfig(app)
    app.use(mainRouter)
    app.listen(port,()=>{
        console.log(`server run on port ${port}: http://localhost:${port}`)
    })
}

main()