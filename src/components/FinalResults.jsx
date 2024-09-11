

function FinalResults({ workouts, handleEdit, handleDelete }) {
  return (
    <table className="table final-results">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Пройдено (км)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <tr key={workout.id}>
            <td>{workout.date}</td>
            <td>{workout.distance}</td>
            <td>
              <button className="icon" onClick={() => handleEdit(workout.id)}>
                ✎
              </button>
              <button className="icon" onClick={() => handleDelete(workout.id)}>
              ✘
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FinalResults;
