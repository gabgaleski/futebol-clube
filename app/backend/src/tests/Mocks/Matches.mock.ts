const matchesMock = [
    {
      id: 1,
      homeTeamId: 16,
      homeTeamGoals: 1,
      awayTeamId: 8,
      awayTeamGoals: 1,
      inProgress: false,
      homeTeam: {
        teamName: "São Paulo"
      },
      awayTeam: {
        teamName: "Grêmio"
      }
    },
  ];

const createMatch = {
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

const resultCreateMatch = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 2,
  awayTeamId: 8,
  awayTeamGoals: 2,
  inProgress: true
}

const errorMatch = {
  homeTeamId: 1,
  awayTeamId: 1,
  homeTeamGoals: 2,
  awayTeamGoals: 2
}

  export {
    matchesMock,
    createMatch,
    resultCreateMatch,
    errorMatch
  };