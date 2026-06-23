const start=new Date('2026-06-12');
const end=new Date('2026-10-15');
const today=new Date();
const diff=Math.max(0,Math.floor((today-start)/86400000));
const cycle=Math.min(6,Math.floor(diff/21)+1);
const day=diff%21+1;
const on=day<=14;
document.getElementById('status').textContent=on?'🟢 ON Medication':'⚪ OFF Week';
document.getElementById('cycle').textContent=`Cycle ${cycle} • Day ${day}`;
const pct=Math.min(100,Math.round(diff/(((end-start)/86400000)+1)*100));
document.getElementById('fill').style.width=pct+'%';
document.getElementById('summary').textContent=`Treatment ${pct}% complete • Final date: 15 Oct 2026`;
['am','pm','lap','fatigue','bone','mouth','hfs','water','weight','notes'].forEach(id=>{
const e=document.getElementById(id);
const v=localStorage.getItem(id);
if(v!==null){if(e.type==='checkbox')e.checked=v==='1';else e.value=v;}
const save=()=>localStorage.setItem(id,e.type==='checkbox'?(e.checked?'1':'0'):e.value);
e.onchange=save;e.oninput=save;
});
