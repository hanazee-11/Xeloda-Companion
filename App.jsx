import "./App.css";
export default function App(){
return(<div className="container">
<h1>💙 Xeloda Companion</h1>
<div className="card hero">
<h2>Good Morning, Suhana 🌸</h2>
<p><strong>Cycle 1 • Day 1</strong></p>
<p>🟢 ON Medication</p>
<div className="progress"><div className="bar"></div></div>
<p>Progress: 5%</p>
</div>
<div className="grid">
<div className="card"><h3>Morning Dose</h3><button>☐ Mark Taken</button></div>
<div className="card"><h3>Evening Dose</h3><button>☐ Mark Taken</button></div>
</div>
<div className="card">
<h3>Today's Reminder</h3>
<ul>
<li>💊 Take Xeloda after food</li>
<li>💧 Drink 8 glasses of water</li>
<li>🧴 Moisturize hands & feet</li>
</ul>
</div>
</div>)}