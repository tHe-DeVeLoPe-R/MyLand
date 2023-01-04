function usersModel(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
      autoIncrement:true, 
      unique:true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  return users
}

module.exports = usersModel