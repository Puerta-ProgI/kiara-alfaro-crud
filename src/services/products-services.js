let panes = require("../data/panes");



const service ={

    listarPanes: ()=>{

        return panes
    },

    buscarPan: (id)=>{

        let panes = service.listarPanes();

        let panAEnviar = panes.find((pan) => {
            return pan.id == id;
        })

        return panAEnviar || {}
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