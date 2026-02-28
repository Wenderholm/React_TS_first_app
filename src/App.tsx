import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";
import goalsImg from "./assets/goals.jpg";
import { GoalsProvider } from "./context/GoalsContext";

// ustawiamy typ CourseGoal jako obiekt z tytulem, opisem i id oraz ich typami
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
  isEditing?: boolean; // nowe pole do śledzenia trybu edycji
  isCompleted?: boolean; // nowe pole do śledzenia stanu ukończenia
};

export default function App() {
  return (
    <GoalsProvider>
      <main>
        <Header image={{ src: goalsImg, alt: "A list of goals" }}>
          <h1>Your Course Goals</h1>
        </Header>
        <NewGoal />
        <CourseGoalList />
      </main>
    </GoalsProvider>
  );
}
