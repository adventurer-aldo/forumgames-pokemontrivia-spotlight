function BBScoreboard(props) {
  return (
    <div className="p-2">
      <div className="btn btn-success w-100 fw-bold text-start fs-6 bg-gradient shadow">BBCODE SCOREBOARD</div>
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[css-div=\"display: flex; border-radius: 0.375rem; overflow: hidden; margin: 9px\"]${
          props.teams.map((team, index) => `[div="width: ${team.score / props.total * 100}%; overflow: hidden; color: black; font-weight: bold; text-align: center; background-color: #${index == 0 ? '62d5a4' : 'c0345c'}"]${team.name == 'Marowak' ? 'MAR' : 'DEC'}
          ${team.score} Point${team.score !== 1 ? 's' : ''}[/div]`).join('')}[/css-div]
          ${props.players.map((player, index) => `[css-div="display: block; margin-bottom: 4.25px; text-align: center"][css-div="display: inline-block; border-radius: 0.375rem; border: solid gray 2px"]${player.team == 1 ? '[css-div="display: inline-block; height: 100%; background-color: #62d5a4"]MAR[/css-div]' : '[css-div="display: inline-block; height: 100%; background-color: #c0345c"]DEC[/css-div]'} [span="padding: 3px"]${player.name} -- ${player.points} Point${player.points !== 1 ? 's' : ''} ${player.added > 0 ? `[span="font-weight: bold; color: #${player.team == 1 ? '62d5a4' : 'c0345c'}"]( ${player.complete ? '[icon]star[/icon]' : '+'} ${player.added} Point${player.added > 1 ? 's' : ''})[/span]` : ''}[/span][/css-div][/css-div]`).join('')}`
      } style={{minHeight: 100}}/>
    </div>
  )
}
