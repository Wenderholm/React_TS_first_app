import { useState } from "react";

import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import goalsImg from "./assets/goals.jpg";

// ustawiamy typ CourseGoal jako obiekt z tytulem, opisem i id oraz ich typami
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  // CourseGoal[] oznacza tablice obiektow typu CourseGoal
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      // newGoal: CourseGoal oznacza, ze newGoal jest obiektem typu CourseGoal
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }
  // usuwanie celu
  function handleDeleteGoal(id: number) {
    // filtrujemy cele, aby usunąć ten o podanym id czyli zostaje nam tablica bez celu z kliknietym id
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
