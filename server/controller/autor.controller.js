// import produtos from '../models';
import {Autor, sequelize} from '../models';
// import sequelize from 'sequelize';
module.exports ={
    list: (req,res)=>{
        console.log("listando..")
        return Autor
        .all()
        .then((result)=>{
            if(result.length == 0){
                res.status(200).send({
                    message:'Vazio'
                })
            } else {
                res.status(200).send(result)
            }

        }).catch((err)=>{
            res.status(400).send(err)
        })
    },
    retrieve: (req,res)=>{
            console.log("retrieve..")
            return Autor
            .findById(req.params.id)
            .then(result=>{
                // if(!result){
                //   res.status(404).send({message: 'not found'})
                // }
              return res.status(200).send({message: 'retrieve', result})
            })
            .catch(err=>{
              res.status(400).send({message:'retrieve err ',err})
              next();
            });     
    },
    create: (req,res)=>{
        console.log("create")
        if(req.body.hasOwnProperty('nome') && req.body.hasOwnProperty('email') ){
            Autor.create({nome:req.body.nome,email:req.body.email},{fields:['nome','email']})
            .then((result)=>{
               return res.status(200).send({message:"Criado",res:req.body})
            }).catch((err)=>{
               return res.status(400).send({message:"Erro ao salvar",err})            
            })   
        } else {
           return res.status(400).send({message:"Preencha todos os campos"})            
        }
    },
    delete: (req,res)=>{
        console.log("delete")
        if(req.params.id > 0){
            Autor.destroy({where:{id: req.params.id}})
            .then((result)=>{
                if(!result){
                  return  res.status(404).send({message: 'not found'})
                }
               return res.status(200).send({message:"Apagado: ",result})                
            })
            .catch((err)=>{
               return res.status(400).send(err)
            });
        } else {
           return res.status(400).send(err);
        }
    },
    update: (req,res)=>{
        console.log("update")
        if(req.params.id > 0){
            Autor.update({nome: req.body.nome,email:req.body.email},{where:{id: req.params.id}})
            .then((result)=>{
                if(!result){
                  return  res.status(404).send({message: 'not found'})
                }
               return res.status(200).send({message:"Atualizado: "})                
            })
            .catch((err)=>{
               return res.status(400).send(err)
            });
        } else {
            return res.status(400).send(err);
        }
    },
    listquery:(req,res) => {
            sequelize.query("SELECT * FROM Autor",{ type: sequelize.QueryTypes.SELECT})
          .then(result=>{
              if(!result){
                return res.status(404).send({message:'Não há registros'})     
              }
             return res.status(201).send({message:'custom query ',result})
          }).catch(err=>{
              return res.status(400).send({message: err})
          })  
    }   
}