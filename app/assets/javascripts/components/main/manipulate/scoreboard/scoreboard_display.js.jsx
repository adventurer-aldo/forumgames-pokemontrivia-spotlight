function Scoreboard(props) {
  return (
    <div className="p-2 border-bottom border-3 border-dark">
      <div className="btn btn-warning w-100 fw-bold mb-2 text-start fs-6 bg-gradient shadow">SCOREBOARD</div>
      {props.players.map(player => <div key={player.id}><div className="d-inline-block mb-1">
        <button className={`btn btn-${player.team == 1 ? 'primary' : 'warning'} rounded-start rounded-0 p-0`} onClick={() => props.addPoint(player.id)} disabled={!player.can_earn}>
          <img src={player.team === 2 ? props.decidueye : props.marowak} /> + 1 
        </button>
        <div className="d-inline-block p-1 border-1 border-top border-bottom border-dark">{player.name} </div>
        <span className="text-bg-warning p-2">{player.points} Point{player.points !== 1 ? 's' : ''} {player.added > 0 ? <span className="fw-bold">({player.eligible ? '★' : '+'} {player.added} Point{player.added > 1 ? 's' : ''})</span> : ''}</span>
        <button className={`btn btn-danger rounded-end rounded-0 p-1`} onClick={() => props.deletePoint(player.id)} disabled={player.added == 0}>
          - 1
        </button>
      </div></div>)}
    </div>
  )
}
