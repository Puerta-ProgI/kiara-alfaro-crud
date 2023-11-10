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

    create: (data)=>{


        let panACrear={

            id:panes[panes.length-1].id+1,
            name: data.name,
            desc:data.description

        }

        panes.push(panACrear)
    },

    delete: (id)=>{

        let panesFiltrados= panes.filter((pan)=>pan.id != id)
        panes= panesFiltrados;
        return panes
    }
}

module.exports = service;