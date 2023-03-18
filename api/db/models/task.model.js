const { Model, DataTypes } = require('sequelize');

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
  }
}

class Task extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: TASK_TABLE,
      modelName: 'Task'
    }
  }
}

module.exports = { Task, TaskSchema, TASK_TABLE }
