import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "hint" | "warning";
  //  ? oznacza ze ta wlasciwosc jest opcjonalna i nie musi byc uzywana przy wywolaniu komponentu
  //  severity jest wymagana tylko gdy mode jest "warning"
  // problem jest w tym jak nie dodamy severity gdy mode jest "warning" nie dostaniemy bledu kompilacji
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};

export default function InfoBox({ mode, severity, children }: InfoBoxProps) {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
