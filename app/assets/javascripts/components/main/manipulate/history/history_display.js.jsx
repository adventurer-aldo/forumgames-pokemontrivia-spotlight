function History(props) {
  return (
    <div className="w-25 p-2 border-start border-dark border-3">
      <div className="btn btn-danger w-100 fw-bold text-start fs-6 bg-gradient shadow">HISTORY</div>
      <div className="overflow-scroll" style={{maxHeight: 530}}>
        {props.histories.map((history, index) => <div key={index} className="card mt-1"><div className="card-body">{history.action}<div className="card-subtitle text-muted">{history.done_at}</div></div></div>)}
      </div>
    </div>
  )
}