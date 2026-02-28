import CourseGoal from "./CourseGoal.tsx";
import InfoBox from "./InfoBox.tsx";
import { ReactNode } from "react";
import { useGoals } from "../context/GoalsContext";

export default function CourseGoalList() {
  const { goals } = useGoals(); // Pobieramy goals z Context

  // jezeli nie ma celow to wyswietl InfoBox i nic wiecej nie renderuj
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal goal={goal} />
          </li>
        ))}
      </ul>
    </>
  );
}
