function GameMain(props) {
  [games, setGames] = React.useState([]);
  [currentPoints, setCurrentPoints] = React.useState([]);
  [players, setPlayers] = React.useState([]);
  [teams, setTeams] = React.useState([]);
  [total, setTotal] = React.useState(0);
  [histories, setHistories] = React.useState([]);
  
  [username, setUsername] = React.useState('');
  [game, setGame] = React.useState('');
  [gameUrl, setGameUrl] = React.useState('');
  [selectedTeam, setSelectedTeam] = React.useState('1');
  [selectedSection, setSelectedSection] = React.useState('0');

  React.useEffect(() => {
    reloadData();
  },[])

  const reloadData = () => {
    axios.get('/api/players')
    .then(response => {
      setPlayers(response.data);
      axios.get('/api/games')
      .then(response => {
        setGames(response.data);
        axios.get('/api/teams')
        .then(response => {
          setTeams(response.data);
          let ttotal = 0;
          response.data.forEach(element => {
            ttotal += element.score
          });
          setTotal(ttotal);
          axios.get('/api/histories')
          .then(response => {
            setHistories(response.data)
          })
        });
      })
    });
  }

  const addPlayer = () => {
    axios.post('/api/players', {authenticity_token: props.auth_token, player: {name: username, team_id: selectedTeam}})
    .then(() => {
      setUsername('')
      reloadData();
    })
  }
  
  const addGame = () => {
    axios.post('/api/games', {authenticity_token: props.auth_token, game: {name: game, section: selectedSection, url: gameUrl}})
    .then(() => {
      setGame('');
      setGameUrl('');
      reloadData();
    })
  }

  const changeGame = (event) => {
    let value = event.target.value;
    setGame(value);
  }
  
  const changeTeam = (event) => {
    let value = event.target.value;
    setSelectedTeam(value);
  }

  const changeSection = (event) => {
    let value = event.target.value;
    setSelectedSection(value);
  }

  const changeName = (event) => {
    let value = event.target.value;
    setUsername(value);
  }
  
  const changeGameUrl = (event) => {
    let value = event.target.value;
    setGameUrl(value);
  }

  const addPoint = (player_id) => {
    axios.patch('/api/points/1', {authenticity_token: props.auth_token, point: {player_id: player_id}}).then(() => {
      reloadData();
    }
    )
  }

  const deletePoint = (player_id) => {
    axios.post('/api/points', {authenticity_token: props.auth_token, point: {player_id: player_id}}).then(() => {
      reloadData();
    }
    )
  }

  return (
    <div>
      <CreateData date={props.date} teams={teams} username={username} game={game} addGame={addGame} addPlayer={addPlayer}
      games={games} changeGame={changeGame} changeTeam={changeTeam} changeSection={changeSection} url={gameUrl} changeUrl={changeGameUrl}
      changeName={changeName} />
      <ManipulateData histories={histories} total={total} marowak={props.marowak} decidueye={props.decidueye} games={games} teams={teams}
      players={players.sort((a,b) => b.points - a.points)} addPoint={addPoint} deletePoint={deletePoint} />
    </div>
  )
}
