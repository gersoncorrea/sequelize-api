// import api from '../controller/produto'
import autor from '../controller/autor.controller'
import sequelizeRouter from 'sequelize-router';
import {Livro} from '../models';

module.exports = (app)=>{
    
    // geração manual de rotas
    app.get('/api/autor',autor.list)
    
    // aceita apenas números
    app.get('/api/autor/:id(\\d+)',autor.retrieve)    
    app.delete('/api/autor/:id',autor.delete);
    app.post('/api/autor/add',autor.create);
    app.put('/api/autor/:id',autor.update);

    // utilizando raw query
    app.get('/api/autor/listautor',autor.listquery);

    // geração de rotas usando sequelize-router
    app.use('/api',sequelizeRouter(Livro))   
}