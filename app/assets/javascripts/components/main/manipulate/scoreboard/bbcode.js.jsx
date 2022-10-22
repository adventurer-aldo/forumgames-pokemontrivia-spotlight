function BBScoreboard(props) {
  return (
    <div className="p-2">
      <div className="btn btn-success w-100 fw-bold text-start fs-6 bg-gradient shadow">BBCODE SCOREBOARD</div>
      Global:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[css-div="margin: 0 auto; border-left: solid black 7px; border-right: solid black 7px; border-radius: 0.375rem; background: url('https://i.ibb.co/XCXj8SK/custom.jpg'); padding: 20px; max-width: 900px; color: white"][css-div="margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div=" text-align: center; border-radius: 0.375rem; font-size: 1.2em; font-family: 'Press Start 2P'; padding: 30px; border: solid 3px white;"][COLOR=#8CF2A6]FORUM GAMES[/COLOR] & [COLOR=#FF6BBF]POKÉMON TRIVIA[/COLOR]
[icon]skull[/icon]SPOTLIGHT[icon]skull[/icon]\n
DAY ${props.games.map(game => JSON.stringify(game.id - 13)).join(' & ')}
CURRENT GAME${props.games.length > 1 ? 'S' : ''}:${props.games.map(game => `\n«${game.name.toUpperCase()}»\n[css-div="font-size: 0.7em"][U][URL="${game.url}"][COLOR=white]Click here to go to the thread![/COLOR][/URL][/U][/css-div]`).join('')}
[/css-div][/css-div]
[css-div="margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div="border-radius: 0.375rem; border: solid 3px white; padding: 10px"][css-div="border-bottom: solid 3px white; font-family: 'Press Start 2P'; font-size: 1.2em; border-radius: 0.375rem; padding: 7px"][B]What's this?[/B][/css-div][cd="padding: 9px; padding-bottom: 0"][icon]skull[/icon] Play on several forum games to earn points for your team!
[icon]skull[/icon] Each day, a different game from either the [B][URL="https://www.pokecommunity.com/forumdisplay.php?fn=forum-games"][span="color: white;"]Forum Games[/span][/URL][/B] or [B][URL="https://www.pokecommunity.com/forumdisplay.php?fn=pokemon-trivia"][span="color: white;"]Pokémon Trivia[/span][/URL][/B] sections will be spotlighted in this thread.
[icon]skull[/icon] During the time the game is spotlighted, you will be able to [B]earn points by posting in their respective threads[/B] and [B]linking those posts here[/B].
[icon]skull[/icon] Each post in a thread is worth 1 point, which can add up to a [B]maximum of 10 points per thread[/B].

That's it. No need to sign-up! You can join at any time you want.[/cd][/css-div][/css-div]
[css-div="margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div="border-radius: 0.375rem; border: solid 3px white; padding: 10px"][css-div="border-bottom: solid 3px white; font-family: 'Press Start 2P'; font-size: 1.2em; border-radius: 0.375rem; padding: 7px"][B]Achievements[/B][/css-div][cd="padding: 9px; padding-bottom: 0"]If you think you can go an extra mile for more points in this event, these one-off achievements can help you get them!
[IMG]https://i.ibb.co/3hbPS5q/decidueye-still.png[/IMG] [B][COLOR=#FF6BBF]([icon]star[/icon] 10 Points)[/COLOR][/B] Have 5 team members get 10 points 5 days in a row
[IMG]https://i.ibb.co/3hbPS5q/decidueye-still.png[/IMG] [B][COLOR=#FF6BBF]([icon]star[/icon] 10 Points)[/COLOR][/B] Have the most members at the top halfway through the Get-Together
[IMG]https://i.ibb.co/3hbPS5q/decidueye-still.png[/IMG] [B][COLOR=#FF6BBF]([icon]star[/icon] 10 Points)[/COLOR][/B] Have a team member complete every game[/cd][/css-div][/css-div]
[css-div="margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div="border-radius: 0.375rem; border: solid 3px white; padding: 10px"][css-div="border-bottom: solid 3px white; font-family: 'Press Start 2P'; font-size: 1.2em; border-radius: 0.375rem; padding: 7px"][B]Scoreboard[/B][/css-div]${true == true ? '' : 'SCOREBOARD HERE'}[css-div=\"display: flex; border-radius: 0.375rem; overflow: hidden; margin: 9px\"]${
          props.teams.map((team, index) => `[div="width: ${team.score / props.total * 100}%; overflow: hidden; color: ${team.name != 'Marowak' ? 'white' : 'white'}; font-weight: bold; text-align: center; background-color: #${index != 0 ? '4c0318' : '567c4c'}"][IMG]${team.name == 'Marowak' ? 'https://i.ibb.co/NNfnjDr/marowak-move.gif' : 'https://i.ibb.co/5vKnR7Y/decidueye-move.gif'}[/IMG]
          ${team.score} Point${team.score !== 1 ? 's' : ''} ${team.added < 1 || team.added == team.score ? '' : `[cd="display: inline-block; whitespace: nowrap; font-weight: bold; color: ${team.name == "Marowak" ? '8be6a4' : 'c0345c'}"](+ ${team.added} Point${team.added != 1 ? 's' : ''} )[/cd]` }[/div]`).join('')}[/css-div]${props.players.map((player, index) => `[css-div="display: block; margin-bottom: 4.25px; text-align: center"][css-div="display: inline-block; border-radius: 0.375rem; border: solid gray 2px"][cd="display: flex"]${player.team == 1 ? '[css-div="display: inline-block; height: 100%; background-color: #567c4c"][CIMG="height: 100%"]https://i.ibb.co/pXHrCt1/marowak-still.png[/CIMG][/css-div]' : '[css-div="display: inline-block; height: 100%; background-color: #4c0318"][CIMG="height: 100%"]https://i.ibb.co/3hbPS5q/decidueye-still.png[/CIMG][/css-div]'} [span="padding: 3px;"]${player.name} → ${player.points} Point${player.points !== 1 ? 's' : ''} ${player.added > 0 ? `[css-div="display: inline-block; whitespace: nowrap; font-weight: bold; color: #${player.team == 1 ? '8be6a4' : 'c0345c'}"]( ${player.complete ? '[icon]star[/icon]' : '+'} ${player.added} Point${player.added > 1 ? 's' : ''})[/css-div]` : ''}[/span][/cd][/css-div][/css-div]`).join('') + "[/css-div][/css-div][/css-div]"}`
      } style={{minHeight: 100}}/>
      
      New Day:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[css-div="margin: 0 auto; border-left: solid black 7px; border-right: solid black 7px; border-radius: 0.375rem; background: url('https://i.ibb.co/XCXj8SK/custom.jpg'); padding: 20px; max-width: 900px; color: white"][css-div="margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div=" text-align: center; border-radius: 0.375rem; font-size: 1.2em; font-family: 'Press Start 2P'; padding: 30px; border: solid 3px white;"]FINALE
DAY ${props.games.map(game => JSON.stringify(game.id - 13)).join(' & ')}

${props.games.map(game => game.section == 0 ? "[COLOR=#8CF2A6]FORUM GAMES[/COLOR]" : "[COLOR=#FF6BBF]POKÉMON TRIVIA[/COLOR]").join(' & ')}
[icon]skull[/icon]SPOTLIGHT[icon]skull[/icon] 
${props.games.map(game => `\n«[URL="${game.url}"][COLOR=white]${game.name.toUpperCase()}[/COLOR][/URL]»\n\n[css-div="font-size: 0.7em; color: white"][U][URL="${game.url}"][COLOR=white]Click here to go to the thread![/COLOR][/URL][/U][/css-div]`).join('')}[/css-div][/css-div][/css-div]
`} style={{minHeight: 100}}/>
      
      Score:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[css-div="margin: 0 auto; border-left: solid black 7px; border-right: solid black 7px; border-radius: 0.375rem; background: url('https://i.ibb.co/XCXj8SK/custom.jpg'); padding: 20px; max-width: 900px; color: white"][css-div="color: white; max-width: 880px; margin: 0 auto; background-color: rgba(0,0,0,0.9);max-width: 97%;padding: 10px; border-radius: 0.375rem;"][css-div="border-radius: 0.375rem; border: solid 3px white; padding: 10px"][css-div="border-bottom: solid 3px white; font-family: 'Press Start 2P'; font-size: 1.2em; border-radius: 0.375rem; padding: 7px; text-align: center"][B]DAY ${props.games.map(game => JSON.stringify(game.id - 13)).join(' & ')} - ${props.games.map(game => game.name.toUpperCase()).join(' & ')}[/B][/css-div][css-div=\"display: flex; border-radius: 0.375rem; overflow: hidden; margin: 9px\"]${
          props.teams.map((team, index) => `[div="width: ${team.score / props.total * 100}%; overflow: hidden; color: ${team.name != 'Marowak' ? 'white' : 'white'}; font-weight: bold; text-align: center; background-color: #${index != 0 ? '4c0318' : '567c4c'}"][IMG]${team.name == 'Marowak' ? 'https://i.ibb.co/NNfnjDr/marowak-move.gif' : 'https://i.ibb.co/5vKnR7Y/decidueye-move.gif'}[/IMG]
          ${team.score} Point${team.score !== 1 ? 's' : ''} ${team.added < 1 || team.added == team.score ? '' : `[cd="display: inline-block; whitespace: nowrap; font-weight: bold; color: ${team.name == "Marowak" ? '8be6a4' : 'c0345c'}"](+ ${team.added} Point${team.added != 1 ? 's' : ''} )[/cd]` }[/div]`).join('')}[/css-div]${props.players.map((player, index) => `[css-div="display: block; margin-bottom: 4.25px; text-align: center"][css-div="display: inline-block; border-radius: 0.375rem; border: solid gray 2px"][cd="display: flex"]${player.team == 1 ? '[css-div="display: inline-block; height: 100%; background-color: #567c4c"][CIMG="height: 100%"]https://i.ibb.co/pXHrCt1/marowak-still.png[/CIMG][/css-div]' : '[css-div="display: inline-block; height: 100%; background-color: #4c0318"][CIMG="height: 100%"]https://i.ibb.co/3hbPS5q/decidueye-still.png[/CIMG][/css-div]'} [span="padding: 3px;"]${player.name} → ${player.points} Point${player.points !== 1 ? 's' : ''} ${player.added > 0 ? `[css-div="display: inline-block; whitespace: nowrap; font-weight: bold; color: #${player.team == 1 ? '8be6a4' : 'c0345c'}"]( ${player.complete ? '[icon]star[/icon]' : '+'} ${player.added} Point${player.added > 1 ? 's' : ''})[/css-div]` : ''}[/span][/cd][/css-div][/css-div]`).join('')}[/css-div][/css-div][/css-div]`
      } style={{minHeight: 100}}/>
      
      Notepad:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} value={
      `S
`} />
    </div>
  )
}
