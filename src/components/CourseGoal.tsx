import { useState } from "react";
import { CourseGoal as CourseGoalType } from "../App";
import { useGoals } from "../context/GoalsContext";

type CourseGoalProps = {
  goal: CourseGoalType;
};

export default function CourseGoal({ goal }: CourseGoalProps) {
  const { deleteGoal, editGoal, saveGoal, cancelEdit, toggleCompletion } =
    useGoals();

  // Local state dla wartości w formularzach edycji
  const [editTitle, setEditTitle] = useState(goal.title);
  const [editDescription, setEditDescription] = useState(goal.description);

  // Reset wartości gdy wchodzimy w tryb edycji
  const handleEdit = () => {
    setEditTitle(goal.title);
    setEditDescription(goal.description);
    editGoal(goal.id);
  };

  // Zapisanie zmian
  const handleSave = () => {
    saveGoal(goal.id, editTitle, editDescription);
  };

  // Anulowanie edycji
  const handleCancel = () => {
    setEditTitle(goal.title); // przywróć oryginalne wartości
    setEditDescription(goal.description);
    cancelEdit(goal.id);
  };

  if (goal.isEditing) {
    // Tryb edycji - pokazuj formularz
    return (
      <article style={{ border: "2px solid #007bff", padding: "10px" }}>
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
            placeholder="Enter title..."
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            style={{ width: "100%", height: "80px", padding: "5px" }}
            placeholder="Enter description..."
          />
        </div>
        <button
          onClick={handleSave}
          style={{
            marginRight: "10px",
            backgroundColor: "#28a745",
            color: "white",
          }}
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          style={{ backgroundColor: "#6c757d", color: "white" }}
        >
          Cancel
        </button>
      </article>
    );
  }

  // Tryb zwykły - pokazuj dane
  return (
    <article>
      <div
        style={{
          textDecoration: goal.isCompleted ? "line-through" : "none",
          margin: "0 8px",
        }}
      >
        <h2>{goal.title}</h2>
        <p>{goal.description}</p>
      </div>
      <button
        onClick={() => deleteGoal(goal.id)}
        style={{ marginRight: "10px" }}
      >
        Delete
      </button>
      <input
        type="checkbox"
        checked={goal.isCompleted}
        onChange={() => toggleCompletion(goal.id)}
      />
      <button onClick={handleEdit}>Edit</button>
    </article>
  );
}
