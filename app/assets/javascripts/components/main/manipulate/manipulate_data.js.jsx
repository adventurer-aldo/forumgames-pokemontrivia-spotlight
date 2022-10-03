function ManipulateData(props) {
  return (
    <div>
      <div>
        <div className="m-3 d-flex w-100 rounded text-bg-light" style={{maxWidth: 1300, maxHeight: 500}}>
          <div className="w-75">
            <Clash teams={props.teams} total={props.total} />
            <Scoreboard players={props.players} games={props.games} addPoint={props.addPoint}
            marowak={props.marowak} decidueye={props.decidueye} deletePoint={props.deletePoint} />
            <BBScoreboard marowak={props.marowak} decidueye={props.decidueye} players={props.players}
            total={props.total} teams={props.teams} />
          </div>
          <History />
        </div>
      </div>
    </div>
  )
}