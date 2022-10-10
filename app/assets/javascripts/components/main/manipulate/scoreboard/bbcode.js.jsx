function BBScoreboard(props) {
  return (
    <div className="p-2">
      <div className="btn btn-success w-100 fw-bold text-start fs-6 bg-gradient shadow">BBCODE SCOREBOARD</div>
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[css-div=\"display: flex; border-radius: 0.375rem; overflow: hidden; margin: 9px\"]${
          props.teams.map((team, index) => `[div="width: ${team.score / props.total * 100}%; overflow: hidden; color: ${team.name != 'Marowak' ? 'white' : 'white'}; font-weight: bold; text-align: center; background-color: #${index != 0 ? '4c0318' : '567c4c'}"][IMG]${team.name == 'Marowak' ? 'https://i.ibb.co/NNfnjDr/marowak-move.gif' : 'https://i.ibb.co/5vKnR7Y/decidueye-move.gif'}[/IMG]
          ${team.score} Point${team.score !== 1 ? 's' : ''} ${team.added < 1 || team.added == team.score ? '' : `[cd="display: inline-block; whitespace: nowrap; font-weight: bold; color: ${team.name == "Marowak" ? '8be6a4' : 'c0345c'}"]( + ${team.added} Point${team.added != 1 ? 's' : ''} )[/cd]` }[/div]`).join('')}[/css-div]${props.players.map((player, index) => `[css-div="display: block; margin-bottom: 4.25px; text-align: center"][css-div="display: inline-block; border-radius: 0.375rem; border: solid gray 2px"][cd="display: flex"]${player.team == 1 ? '[css-div="display: inline-block; height: 100%; background-color: #567c4c"][CIMG="height: 100%"]https://i.ibb.co/pXHrCt1/marowak-still.png[/CIMG][/css-div]' : '[css-div="display: inline-block; height: 100%; background-color: #4c0318"][CIMG="height: 100%"]https://i.ibb.co/3hbPS5q/decidueye-still.png[/CIMG][/css-div]'} [span="padding: 3px;"]${player.name} → ${player.points} Point${player.points !== 1 ? 's' : ''} ${player.added > 0 ? `[css-div="display: inline-block; whitespace: nowrap; font-weight: bold; color: #${player.team == 1 ? '8be6a4' : 'c0345c'}"]( ${player.complete ? '[icon]star[/icon]' : '+'} ${player.added} Point${player.added > 1 ? 's' : ''})[/css-div]` : ''}[/span][/cd][/css-div][/css-div]`).join('')}`
      } style={{minHeight: 100}}/>
    </div>
  )
}
