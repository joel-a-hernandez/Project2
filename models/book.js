/* eslint-disable no-unused-vars */
var bycrypt=require("bcryptjs");
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    authors:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    
    },
    averageRating: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    thumbnail: {
      type: DataTypes.STRING(1234), 
      allowNull: false,
    },
    publishedDate: {
      type: DataTypes.STRING, 
      allowNull: false,
    }
    
  });

  
  return Book;
};