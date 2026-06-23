import "./App.css";

const START=new Date("2026-06-12");
const TODAY=new Date();
const diff=Math.max(0,Math.floor((TODAY-START)/(1000*60*60*24)));
const cycle=Math.min(6,Math.floor(diff/21)+1);
const day=(diff%21)+1;

const days=[...Array(21)].map((_,i)=>({
 day:i+1,
 on:i<14
}));

export default function App(){
return(
<div className="app">
<h1>💙 Xeloda Companion</h1>

<div className="hero">
<h2>Cycle {cycle}</h2>
<p>Day {day} of 21</p>
</div>

<div className="card">
<h3>This Cycle</h3>

<div className="calendar">
{days.map(d=>
<div
key={d.day}
className={
"day "+
(d.on?"on ":"off ")+
(d.day===day?"today":"")
}>
{d.day}
</div>
)}
</div>

<p><span className="legend onbox"></span> ON Medication</p>
<p><span className="legend offbox"></span> OFF Week</p>

</div>

</div>
)}
