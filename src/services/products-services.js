let panes = require("../data/panes");
let db= require("../dataBase/models")


const service ={

    listarPanes: async()=>{
        
        let products = await db.Products.findAll();
        return products

    },

    buscarPan: async (id)=>{

       // let panes = service.listarPanes();

        //let panAEnviar = await panes.find((pan) => {
          //  return pan.id == id;
        //})

        //return panAEnviar || {}

        let pan = await db.Products.findOne({

            where:{ id:id}
        })

        return pan ;
    },

    findById: async(id) =>{

        let products=await db.Products.findOne({
            where:{
                id:id
            }
        });
        return products
    },

    create: async (data)=>{


        let panACrear={

            //id:panes[panes.length-1].id+1,
            name: data.name,
            description:data.description

        }

       // panes.push(panACrear)
       db.Products.create(panACrear)
    },

    delete: async (id)=>{

     //   let panesFiltrados= panes.filter((pan)=>pan.id != id)
       // panes= panesFiltrados;

        db.Products.destroy({

            where:{ id:id}
        })
        //return panes
    },

    update:async(data,id) =>{

        let panAEditar={

            name: data.name,
            description:data.description

        }
        db.Products.update(panAEditar,{
            where:{
                id:id
            }
        })

    }
}

module.exports = service;