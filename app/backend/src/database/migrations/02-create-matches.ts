import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMatches from '../../Interfaces/IMatches';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMatches>>('matches', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      homeTeamId: {
        type: DataTypes.INTEGER,
      },
      homeTeamGoals: {
        type: DataTypes.INTEGER,
      },
      awayTeamGoals: {
        type: DataTypes.INTEGER,
      },
      awayTeamId: {
        type: DataTypes.INTEGER,
      },
      inProgress: {
        type: DataTypes.BOOLEAN,
      },
    });
  },

down(queryInterface: QueryInterface) {
  return queryInterface.dropTable('matches');
},
};