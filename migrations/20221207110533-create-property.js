'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      purpose: {
        type: Sequelize.STRING,
        allowNull:false
      },
      p_type: {
        type: Sequelize.STRING,
        allowNull:false
      },
      city: {
        type: Sequelize.STRING,
        allowNull:false
      },
      location: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      area: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      price: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      unit: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      installments_available: {
        type: Sequelize.BOOLEAN,
        allowNull:false
      },
      possession_available: {
        type: Sequelize.BOOLEAN, 
        allowNull:false
      },
      bedrooms: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      bathrooms: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      title: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      description: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      image_link: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      email: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      contact: {
        type: Sequelize.STRING, 
        allowNull:false
      },
      userid:{
        type:Sequelize.INTEGER, 
        allowNull:false
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('properties');
  }
};