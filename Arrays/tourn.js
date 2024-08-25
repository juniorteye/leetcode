const HOME_TEAM_WON = 1;
const POINTS = 3;

function tournamentWinner(competitions, results) {
  let currBestTeam = '';
  const scores = { [currBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(scores, winningTeam);

    if (scores[winningTeam] > scores[currBestTeam]) {
      currBestTeam = winningTeam;
    }
  }

  return currBestTeam;
}

function updateScores(scores, team) {
  const prevScore = scores[team] || 0;
  scores[team] = prevScore + POINTS;
}