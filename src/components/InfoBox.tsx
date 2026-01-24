import { type ReactNode } from "react";

//  ? oznacza ze ta wlasciwosc jest opcjonalna i nie musi byc uzywana przy wywolaniu komponentu
//  severity jest wymagana tylko gdy mode jest "warning"
// problem jest w tym jak nie dodamy severity gdy mode jest "warning" nie dostaniemy bledu kompilacji
// type InfoBoxProps = {
//   mode: "hint" | "warning";
//   severity?: "low" | "medium" | "high";
//   children: ReactNode;
// };
//  rozwiazaniem prolbemu jest uzycie unii typow

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children } = props;
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
  // tutaj TS wie ze props jest typu WarningBoxProps bo poprzedni warunek nie zostal spelniony
  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
