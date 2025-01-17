import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import FinalResults from "./components/FinalResults";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [currentWorkout, setCurrentWorkout] = useState({
    date: "",
    distance: "",
  });

  const sortItems = (date1, date2) => {
    if (date1.date > date2.date) return -1;
    if (date1.date < date2.date) return 1;
    return 0;
  };

  const handleAdd = (workout) => {
    setWorkouts((prevWorkouts) => {
      for (let prevWorkout of prevWorkouts) {
        if (prevWorkout && prevWorkout.date === workout.date) {
          prevWorkout.distance =
            Number(prevWorkout.distance) + Number(workout.distance);
          return [...prevWorkouts].sort(sortItems);
        }
      }
      return [...prevWorkouts, workout].sort(sortItems);
    });
  };

  const handleDelete = (id) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.filter((workout) => workout.id !== id)
    );
  };

  const handleEdit = (id) => {
    const workout = workouts.find((item) => item.id === id);
    setCurrentWorkout({
      date: workout.date,
      distance: workout.distance,
    });
    handleDelete(workout.id);
  };

  return (
    < div className="container">
        <Form
          setWorkouts={setWorkouts}
          handleAdd={handleAdd}
          currentWorkout={currentWorkout}
        />
        <FinalResults
          workouts={workouts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
    </div>
  );
}

export default App;
