function CreateData(props) {

  return (
    <div className="m-3 p-2 rounded text-bg-secondary bg-gradient" style={{maxWidth: 1300}}>
      <div className="text-white fw-bold text-center fs-5">{props.date}</div>
      {props.games.map((game, index) => <div key={index}>{game.name}</div>)}
      <div className="input-group mb-3">
        <input type="text" name="player[name]" value={props.username} onChange={(event) => props.changeName(event)} className="form-control" placeholder="Player's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <select name="player[team_id]" className="btn btn-dark" value={selectedTeam} onChange={(event) => props.changeTeam(event)}>
          {props.teams.map((team) => <option key={team.id} value={team.id}>Team {team.name}</option>)}
        </select>
        <button className="input-group-text btn btn-dark" id="basic-addon2" onClick={props.addPlayer}><span className="fw-bold fs-6 px-2">+</span>Add Player</button>
      </div>
      <div className="input-group mb-3">
        <input type="text" name="game[name]" value={props.game} onChange={(event) => props.changeGame(event)} className="form-control" placeholder="Game's title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <input type="text" name="game[url]" value={props.url} onChange={(event) => props.changeUrl(event)} className="form-control" placeholder="Link to the game" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <select name="game[section]" className="btn btn-dark" value={props.selectedSection} onChange={(event) => props.changeSection(event)}>
          <option value='0'>Forum Games</option>
          <option value='1'>Pokémon Trivia</option>
        </select>
        <button className="input-group-text btn btn-dark" id="basic-addon2" onClick={props.addGame}><span className="fw-bold fs-6 px-2">+</span>Create Game</button>
      </div>
    </div>
  )
}
