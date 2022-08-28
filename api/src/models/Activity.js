const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hardness:{
        type: DataTypes.FLOAT
    },
    duration:{
        type: DataTypes.INTEGER 
    },
    season :{
        type: DataTypes.ENUM('Summer', 'Autumn', 'Winter' ,'Spring')
    }
  },{
      timestamps:false
  });
};
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)