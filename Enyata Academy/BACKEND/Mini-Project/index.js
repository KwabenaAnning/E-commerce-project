require('./src/config/database.config')
const express=require('express');
const app= express();
const { notFound, appErrorHandler, genericErrorHandler} = require('./middleware/error.middleware')
const ap1Version1= require('./src/config/versioning/v1');
const envConfig =require('./src/config/env/index')

app.use(express.json());
const PORT =envConfig.APP_PORT||6050

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
});

app.use('/api/v1',ap1Version1);
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound)

module.exports= app;