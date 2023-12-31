import ILeaderboard from '../Interfaces/ILeaderboard';
import IMatches from '../Interfaces/IMatches';

const teamCreate = {
  name: '',
  totalPoints: 0,
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  goalsBalance: 0,
  efficiency: 0,
};

const teamReset = () => {
  teamCreate.name = '';
  teamCreate.totalPoints = 0;
  teamCreate.totalGames = 0;
  teamCreate.totalVictories = 0;
  teamCreate.totalDraws = 0;
  teamCreate.totalLosses = 0;
  teamCreate.goalsFavor = 0;
  teamCreate.goalsOwn = 0;
  teamCreate.goalsBalance = 0;
  teamCreate.efficiency = 0;
};

const victoriesHome = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalPoints += 3;
  teamCreate.totalVictories += 1;
  teamCreate.goalsFavor += homeGoals;
  teamCreate.goalsOwn += awayGoals;
};

const victoriesAway = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalPoints += 3;
  teamCreate.totalVictories += 1;
  teamCreate.goalsFavor += awayGoals;
  teamCreate.goalsOwn += homeGoals;
};

const lossesHome = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalLosses += 1;
  teamCreate.goalsFavor += homeGoals;
  teamCreate.goalsOwn += awayGoals;
};

const lossesAway = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalLosses += 1;
  teamCreate.goalsFavor += awayGoals;
  teamCreate.goalsOwn += homeGoals;
};

const drawsHome = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalPoints += 1;
  teamCreate.totalDraws += 1;
  teamCreate.goalsFavor += homeGoals;
  teamCreate.goalsOwn += awayGoals;
};

const drawsAway = (homeGoals: number, awayGoals: number) => {
  teamCreate.totalPoints += 1;
  teamCreate.totalDraws += 1;
  teamCreate.goalsFavor += awayGoals;
  teamCreate.goalsOwn += homeGoals;
};

const homeTotalPoints = (matches: IMatches[]) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals > awayTeamGoals) {
      victoriesHome(homeTeamGoals, awayTeamGoals);
    } else if (homeTeamGoals < awayTeamGoals) {
      lossesHome(homeTeamGoals, awayTeamGoals);
    } else {
      drawsHome(homeTeamGoals, awayTeamGoals);
    }
  });
};

const awayTotalPoints = (matches: IMatches[]) => {
  matches.forEach(({ homeTeamGoals, awayTeamGoals }) => {
    if (homeTeamGoals < awayTeamGoals) {
      victoriesAway(homeTeamGoals, awayTeamGoals);
    } else if (homeTeamGoals > awayTeamGoals) {
      lossesAway(homeTeamGoals, awayTeamGoals);
    } else {
      drawsAway(homeTeamGoals, awayTeamGoals);
    }
  });
};

const resultHome = (name: string, matches: IMatches[]) => {
  if (teamCreate.name !== name) teamReset();
  teamCreate.name = name;
  teamCreate.totalGames += 1;
  homeTotalPoints(matches);
  teamCreate.goalsBalance = teamCreate.goalsFavor - teamCreate.goalsOwn;
  teamCreate.efficiency = Number(((teamCreate.totalPoints / (teamCreate.totalGames * 3)) * 100)
    .toFixed(2));
  return teamCreate;
};

const resultAway = (name: string, matches: IMatches[]) => {
  if (teamCreate.name !== name) teamReset();
  teamCreate.name = name;
  teamCreate.totalGames += 1;
  awayTotalPoints(matches);
  teamCreate.goalsBalance = teamCreate.goalsFavor - teamCreate.goalsOwn;
  teamCreate.efficiency = Number(((teamCreate.totalPoints / (teamCreate.totalGames * 3)) * 100)
    .toFixed(2));
  return teamCreate;
};

const orderLeaderboard = (leaderboard: ILeaderboard[]) => {
  const sortLeader = leaderboard.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      if (a.goalsBalance === b.goalsBalance) {
        return b.goalsFavor - a.goalsFavor;
      }
      return b.goalsBalance - a.goalsBalance;
    }
    return b.totalPoints - a.totalPoints;
  });
  return sortLeader;
};

const generalCalculate = (home: ILeaderboard, away: ILeaderboard) => {
  const newTeam = { ...teamCreate };
  newTeam.name = home.name;
  newTeam.totalPoints = home.totalPoints + away.totalPoints;
  newTeam.totalGames = home.totalGames + away.totalGames;
  newTeam.totalVictories = home.totalVictories + away.totalVictories;
  newTeam.totalDraws = home.totalDraws + away.totalDraws;
  newTeam.totalLosses = home.totalLosses + away.totalLosses;
  newTeam.goalsFavor = home.goalsFavor + away.goalsFavor;
  newTeam.goalsOwn = home.goalsOwn + away.goalsOwn;
  newTeam.goalsBalance = newTeam.goalsFavor - newTeam.goalsOwn;
  newTeam.efficiency = Number(((newTeam.totalPoints / (newTeam.totalGames * 3)) * 100)
    .toFixed(2));
  return newTeam;
};

const resultGeneral = (home: ILeaderboard[], away: ILeaderboard[]) => {
  const newArray: ILeaderboard[] = [];
  home.forEach((team) => {
    away.forEach((teamAway) => {
      if (team.name === teamAway.name) {
        newArray.push(generalCalculate(team, teamAway));
      }
    });
  });
  return newArray;
};

export { resultHome, resultAway, orderLeaderboard, resultGeneral };
