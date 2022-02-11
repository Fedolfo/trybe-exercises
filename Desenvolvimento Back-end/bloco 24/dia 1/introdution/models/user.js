const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: {
      type: DataTypes.STRING,
      field: 'phone_num',
    }
  }, {
    underscore: true,
    tableName: 'Users',
  });

  return User;
};

module.exports = User;