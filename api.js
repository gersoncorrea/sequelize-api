import app from './server/config/custom-express';
const port = parseInt(process.env.PORT, 10) || 8000;

const server = app();
server.set('port',port);
server.listen(port,()=>{
    console.log('Listening to port: ',port)
})