import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>💙 Xeloda Companion</h1>
        <p>Welcome back, Suhana 🌸</p>
      </header>

      <section className="card hero">
        <h2>Cycle 1 • Day 1</h2>
        <span className="badge">🟢 ON Medication</span>
        <div className="progress">
          <div className="fill"></div>
        </div>
        <p>0% Complete</p>
      </section>

      <section className="grid">
        <div className="card">
          <h3>☀️ Morning Dose</h3>
          <button>Mark as Taken</button>
        </div>

        <div className="card">
          <h3>🌙 Evening Dose</h3>
          <button>Mark as Taken</button>
        </div>
      </section>

      <section className="card">
        <h3>Today's Reminder</h3>
        <ul>
          <li>💊 Take Xeloda within 30 minutes after food.</li>
          <li>💧 Drink plenty of water.</li>
          <li>🧴 Moisturize hands and feet.</li>
        </ul>
      </section>

      <nav className="bottomNav">
        <button>🏠 Home</button>
        <button>💊 Meds</button>
        <button>📅 Calendar</button>
        <button>😊 Symptoms</button>
      </nav>
    </div>
  );
}
