function Clash(props) {

  return (
    <div className="d-flex w-100">
      {props.teams.map((team, index) => <div key={index} className={["text-bg-primary", "text-bg-warning", "text-bg-danger"][index] + ' text-center fw-bold'} style={{height: 30, width: `${team.score / props.total * 100}%`}}>{team.score} Point{team.score !== 1 ? 's' : ''}</div>)}
    </div>
  )
}