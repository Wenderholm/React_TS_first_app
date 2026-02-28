import { createContext, useContext, useState, ReactNode } from "react";
import { CourseGoal } from "../App";

type GoalsContextType = {
  goals: CourseGoal[];
  addGoal: (title: string, description: string) => void;
  deleteGoal: (id: number) => void;
  editGoal: (id: number) => void;
  saveGoal: (id: number, title: string, description: string) => void;
  cancelEdit: (id: number) => void;
  toggleCompletion: (id: number) => void;
};

const GoalsContext = createContext<GoalsContextType | null>(null);

export function GoalsProvider({ children }: { children: ReactNode }) {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoal = (title: string, description: string) => {
    // Aktualizuje stan w Context, dodając nowy cel do istniejącej listy
    setGoals((prev) => [
      // Zachowuje istniejące cele
      ...prev,
      // ← Dodaje nowy cel
      {
        id: Math.random(),
        title, // ← Tytuł z formularza
        description, // ← Opis z formularza
        isCompleted: false, // ← Domyślnie nie ukończone
        isEditing: false, // ← Domyślnie nie w edycji
      },
    ]);
  };

  const deleteGoal = (id: number) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const editGoal = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, isEditing: !goal.isEditing } : goal,
      ),
    );
  };

  const saveGoal = (id: number, title: string, description: string) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id
          ? { ...goal, title, description, isEditing: false }
          : goal,
      ),
    );
  };

  const cancelEdit = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, isEditing: false } : goal,
      ),
    );
  };

  const toggleCompletion = (id: number) => {
    setGoals((prev) =>
      prev.map((goal) =>
        goal.id === id ? { ...goal, isCompleted: !goal.isCompleted } : goal,
      ),
    );
  };

  return (
    <GoalsContext.Provider
      value={{
        goals,
        addGoal,
        deleteGoal,
        editGoal,
        saveGoal,
        cancelEdit,
        toggleCompletion,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

// Custom hook do używania contextu
export function useGoals() {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within GoalsProvider");
  }
  return context;
}
