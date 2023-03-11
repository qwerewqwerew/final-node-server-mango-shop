module.exports=function(sequelize,dataTypes){
    const icon= sequelize.define('Icon',{
        name:{
            type:dataTypes.STRING(300),
            allowNull:false,
        },
        imageUrl:{
            type:dataTypes.STRING(300),
            allowNull:false,
        },

    });
    return icon;
}