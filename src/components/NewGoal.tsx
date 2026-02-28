import { useRef, type FormEvent } from "react";
import { useGoals } from "../context/GoalsContext";

export default function NewGoal() {
  // Pobieramy funkcję addGoal z Context, aby móc dodać nowy cel do listy
  const { addGoal } = useGoals();
  // Tworzymy referencje do pól formularza, aby później pobrać ich wartości
  // useRef pozwala nam stworzyć "referencję" do elementu DOM, dzięki czemu możemy bezpośrednio odczytać jego wartość
  // HTMLInputElement to typ dla elementów <input>, dzięki temu TypeScript wie, jakie właściwości i metody są dostępne na tych elementach
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Pobieramy wartości z pól formularza za pomocą referencji
    // goal.current i summary.current mogą być null, dlatego używamy operatora
    // non-null assertion (!) za current aby powiedzieć TypeScriptowi, że na pewno nie będą null w tym momencie
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    // wywołujemy funkcję addGoal z Context, przekazując tytuł i opis nowego celu
    addGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
