import "./App.css";

const START=new Date("2026-06-12");
const END=new Date("2026-10-15");
const TODAY=new Date();

const totalDays=Math.floor((END-START)/(1000*60*60*24))+1;
const elapsed=Math.max(0,Math.floor((TODAY-START)/(1000*60*60*24)));
const remaining=Math.max(0,totalDays-elapsed);
const cycle=Math.min(6,Math.floor(elapsed/21)+1);
const day=(elapsed%21)+1;
const on=day<=14;
const daysToOff=on?15-day:0;
const pct=Math.min(100,Math.round((elapsed/totalDays)*100));

export default function App(){
return(
<div className="app">
<h1>💙 Xeloda Companion</h1>

<div className="hero">
<h2>Cycle {cycle} • Day {day}</h2>
<p>{on?"🟢 ON Medication":"⚪ OFF Week"}</p>

<div className="progress">
<div className="fill" style={{width:pct+"%"}}></div>
</div>

<h3>{pct}% Complete</h3>
<p>🌸 One step closer to the finish line.</p>
</div>

<div className="card">
<h3>⏳ Countdown</h3>
<p><strong>{remaining}</strong> days until treatment completion</p>
<p>🏁 Final treatment: <strong>15 October 2026</strong></p>
</div>

<div className="card">
<h3>📅 This Cycle</h3>
<p>Current Cycle: {cycle} / 6</p>
<p>{on?`${daysToOff} day(s) until OFF week`:"Enjoy your OFF week!"}</p>
</div>

<div className="card">
<h3>💙 Today's Goal</h3>
<ul>
<li>☑ Take morning dose</li>
<li>☑ Take evening dose</li>
<li>💧 Drink enough water</li>
<li>🧴 Moisturize hands & feet</li>
</ul>
</div>
</div>
)}