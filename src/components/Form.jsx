import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import WorkoutModel from "../models/WorkoutModel.js";
import shortid from "shortid";

function Form({ currentWorkout, handleAdd }) {
  const [form, setForm] = useState({ date: "", distance: "" });

  useEffect(() => {
    if (currentWorkout) {
      setForm({ date: currentWorkout.date, distance: currentWorkout.distance });
    }
  }, [currentWorkout]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const workout = new WorkoutModel(
      shortid.generate(),
      form.date,
      form.distance
    );
    handleAdd(workout);
    setForm({ date: "", distance: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-items">
        <div className="data">
          <label for="date">Дата (дд.мм.гг)</label>
          <input
            type="date"
            id="date"
            name="date"
            className="input"
            value={form.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="distance">
          <label for="distance">Пройдено км</label>
          <input
            type="number"
            min="0"
            step="0.1"
            name="distance"
            id="distance"
            className="input"
            value={form.distance}
            onChange={handleChange}
            required
          />
        </div>

        <button className="button" type="submit">
          OK
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  setWorkouts: PropTypes.func.isRequired,
};

export default Form;
