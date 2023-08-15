function BBScoreboard(props) {
  return (
    <div className="p-2">
      <div className="btn btn-success w-100 fw-bold text-start fs-6 bg-gradient shadow">BBCODE SCOREBOARD</div>
      Global:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[CENTER][css_div="background-image: url('https://i.ibb.co/swY352Y/Game.jpg'); color: black; padding: 30px; max-width: 800px; text-align: left"]
        [CENTER][css_div="background-color: #D96420; color: white; font-family: 'Press Start 2P'; padding-top: 30px"][CENTER][B][SIZE="4"]Forum Games & Pokémon Trivia[/SIZE]
        [SIZE="6"]Spotlight[/SIZE][/B]
        [css_div="padding-left: 30px; padding-right: 30px"]
        [css_div="padding: 20px; border: solid white 3px"][FONT="Open Sans"]Day ${props.games.map(game => JSON.stringify(game.id)).join(' & ')}
Current Game${props.games.length > 1 ? 's' : ''}:[B]${props.games.map(game => `\n[SIZE="5"]« ${game.name.toUpperCase()} »[/SIZE]\n[URL="${game.url}"][U][COLOR="White"]Click here to go to the thread![/COLOR][/URL][/U]`).join('')}
[/B][/FONT][/css_div]
[/CENTER][/css_div][/css_div][/CENTER]



[css_div="background-color: white"][css_div="padding: 0px 30px 0px 30px; background-color: #D96420; color: white; font-size: 30px"][FONT="Slackey"][icon]gamepad[/icon] WHAT IS THIS?[/FONT][/css_div][css_div="padding: 20px"]Welcome to the Forum Game & Pokémon Trivia Spotlight!
Each day, this thread will feature a game from either the [URL="https://www.pokecommunity.com/forumdisplay.php?fn=forum-games"][color=#D96420][B]Forum Games[/B][/color][/URL] or the [URL="https://www.pokecommunity.com/forumdisplay.php?fn=pokemon-trivia"][color=#D96420][B]Pokémon Trivia[/B][/color][/URL] sections. Both have fun games that you can play while also being rewarded for it![/css_div][/css_div]

[css_div="background-color: white"][css_div="padding: 0px 30px 0px 30px; background-color: #D96420; color: white; font-size: 30px"][FONT="Slackey"][icon]gamepad[/icon] HOW TO PARTICIPATE?[/FONT][/css_div][css_div="padding: 20px"][LIST]
[*]Each day, a thread from either [B]Forum Games[/B] or [B]Pokémon Trivia[/B] will be spotlighted, shown at the very top of this thread. You won't miss it.
[*]Simply post [B]participating in the day's spotlighted forum game[/B]. As proof, [B]reply to this thread with a link to the post(s) you made in said game[/B]. This means you'll be posting in the game threads and this thread as well.
[*]I'll keep track of how many times everyone submitted their posts here. [B]Each post in a thread is worth 1 forum point, which can add up to a maximum of 10 forum points per thread for a player.[/B]
[*][B]A maximum of 30 points[/B] is available to be added to a team's score per thread.
[*]After a day, a team's members' forum points will be summed to be [B]pit against the other team's[/B] to decide who gets the most points for that thread. Then, the scores will be added to your teams.
[/LIST]

That's it. No need to sign-up! You can join at any time you want.
[/css_div][/css_div]

[css_div="background-color: white"][css_div="padding: 0px 30px 0px 30px; background-color: #D96420; color: white; font-size: 30px"][FONT="Slackey"][icon]gamepad[/icon]ACHIEVEMENTS[/FONT][/css_div][css_div="padding: 20px; "]These will be first come, first served!
[LIST]
[*]Have a member of a team participate in all of the games [B](+10 points)[/B]
[*]Have 4 members of a team get 10 forum points for 4 days in a row [B](+10 points)[/B]
[*]Have a member of a team with the top score above everyone else[B](+10 points)[/B]
[/LIST][/css_div][/css_div]

[css_div="background-color: white"][css_div="padding: 0px 30px 0px 30px; background-color: #D96420; color: white; font-size: 30px"][FONT="Slackey"][icon]gamepad[/icon]FORUM POINTS[/FONT][/css_div][css_div="padding: 20px; text-align: center"][cd="display: flex; border-radius: 0.375rem; overflow: hidden; margin: 9px"]${
          props.teams.map((team, index) => `[div="width: ${team.score / props.total * 100}%; overflow: hidden; color: white; font-weight: bold; text-align: center; background-color: #${team.name == "Gears" ? '65BE80' : '9986F7'}"][icon]${team.name == 'Gears' ? 'cogs' : 'circle'}[/icon]
          ${team.score} Point${team.score !== 1 ? 's' : ''} ${team.added < 1 || team.added == team.score ? '' : `[cd="display: inline-block; whitespace: nowrap; font-weight: bold; color: ${team.name == "Gears" ? '65BE80' : '9986F7'}"](+ ${team.added} Point${team.added != 1 ? 's' : ''} )[/cd]` }[/div]`).join('')}[/cd]${props.players.map((player, index) => `${player.team == 1 ? '[icon]cogs[/icon]' : '[icon]circle[/icon]'} ${player.name} → ${player.points} Point${player.points !== 1 ? 's' : ''} ${player.added > 0 ? `[css-div="display: inline-block; whitespace: nowrap; font-weight: bold; color: #${player.team == 1 ? '8be6a4' : 'c0345c'}"]( ${player.complete ? '[icon]star[/icon]' : '+'} ${player.added} Point${player.added > 1 ? 's' : ''})[/css-div]` : ''}[/span][/cd][/css-div][/css-div]`).join('') + "[/css_div][/css_div]\n\n[/css_div][/CENTER]"}`
      } style={{minHeight: 100}}/>
      
      New Day:
      <textarea className="text-bg-dark p-1 w-100 border-none mt-1 rounded" readOnly={true} 
      value={
        `[CENTER][css_div="max-width: 600px; background-color: #D96420; color: white; font-family: 'Press Start 2P'; padding-top: 30px"][CENTER][B][SIZE="4"]Forum Games[/SIZE]
        [SIZE="6"]Spotlight[/SIZE][/B]
        [css_div="padding-left: 30px; padding-right: 30px"]
        [css_div="padding: 20px; border: solid white 3px"][FONT="Open Sans"]Day ${props.games.map(game => JSON.stringify(game.id - 13)).join(' & ')}:

${props.games.map(game => game.section == 0 ? "[COLOR=#8CF2A6]FORUM GAMES[/COLOR]" : "[COLOR=#FF6BBF]POKÉMON TRIVIA[/COLOR]").join(' & ')}
[icon]skull[/icon]SPOTLIGHT[icon]skull[/icon] 
${props.games.map(game => `\n[B][SIZE="5"]« ${game.url}"][COLOR="White"]${game.name.toUpperCase()}[/COLOR][/URL] »[/SIZE]
[URL="${game.url}"][U][COLOR="White"]Click here to go to the thread![/COLOR][/URL][/U][/B]`).join('')}[/FONT][/css_div]
[/CENTER][/css_div][/css_div][/CENTER]
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
