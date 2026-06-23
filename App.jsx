
import "./App.css";

const START = new Date("2026-06-12");
const TODAY = new Date();

const diffDays = Math.max(
  0,
  Math.floor((TODAY - START) / (1000 * 60 * 60 * 24))
);

const cycle = Math.min(6, Math.floor(diffDays / 21) + 1);
const day = (diffDays % 21) + 1;
const onTreatment = day <= 14;
const progress = Math.min(100, Math.round((diffDays / (21 * 6)) * 100));

export default function App() {
  return (
    <div className="app">
      <h1>💙 Xeloda Companion</h1>

      <div className="hero">
        <h2>Cycle {cycle} • Day {day}</h2>
        <p>{onTreatment ? "🟢 ON Medication" : "⚪ OFF Week"}</p>

        <div className="progress">
          <div className="fill" style={{width: progress + "%"}}></div>
        </div>

        <p>{progress}% Complete</p>
      </div>

      <div className="card">
        <h3>Today's Tasks</h3>
        <ul>
          <li>💊 Morning dose</li>
          <li>🌙 Evening dose</li>
          <li>💧 Drink water</li>
        </ul>
      </div>

      <div className="card">
        <h3>Countdown</h3>
        <p>Final treatment date: <strong>15 October 2026</strong></p>
      </div>
    </div>
  );
}
