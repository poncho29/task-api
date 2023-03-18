const { Model, DataTypes } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const TASK_TABLE = 'tasks';

const TaskSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING
  },
  status: {
    allowNull: false,
    defaultValue: 0,
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Task extends Model {
  static associate(models) {
    this.belongsTo(models.User,{
      as: 'user'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: 'Task'
    }
  }
}

module.exports = { Task, TaskSchema, TASK_TABLE }
