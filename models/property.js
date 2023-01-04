
const { users } = require('./users');

function propertyModel(sequelize, DataTypes) {
  const property = sequelize.define('property', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    purpose: {
      type: DataTypes.STRING,
      allowNull: false
    },
    p_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    installments_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    possession_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    bedrooms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bathrooms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });

  property.associate = (models) => {
    property.belongsTo(models.users, { foreignKey: 'userid', onDelete: 'CASCADE' });
  };
  return property;
}

module.exports = propertyModel


