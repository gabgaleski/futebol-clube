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
      home_team_id: {
        type: DataTypes.INTEGER,
      },
      home_team_goals: {
        type: DataTypes.INTEGER,
      },
      away_team_goals: {
        type: DataTypes.INTEGER,
      },
      away_team_id: {
        type: DataTypes.INTEGER,
      },
      in_progress: {
        type: DataTypes.BOOLEAN,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('matches');
  },
};