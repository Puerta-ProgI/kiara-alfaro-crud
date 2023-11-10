module.exports=(sequelize,dataTypes)=>{

    let alias = "Products";
    let cols ={
        id:{

            type:dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{

            type: dataTypes.STRING,
            allowNull: false,
        },
        description:{

            type: dataTypes.STRING,
            allowNull: false,
        },
    };
    let config={

        tableName: "Products",
        timestamps: false,
    }
    
    const products =sequelize.define(alias,cols,config);
    return products
}