import axios from "axios";

export const saveWorkout = workoutData => {
  return axios.post("/api/workouts", workoutData);
}

export const getSavedWorkouts = () => {
  return axios.get("/api/workouts");
}

export const removeWorkout = workoutId => {
  return axios.delete(`/api/workouts/${workoutId}`);
}

export const updateWorkout = (workoutId, workoutData) => {
  return axios.put(`/api/entries/${workoutId}`, workoutData);
}

export default {
  saveWorkout,
  getSavedWorkouts,
  removeWorkout,
  updateWorkout
}