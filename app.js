const s=new Date('2026-06-12'),e=new Date('2026-10-15'),t=new Date();
const diff=Math.max(0,Math.floor((t-s)/86400000));const cycle=Math.min(6,Math.floor(diff/21)+1);const day=diff%21+1;
document.getElementById('summary').innerHTML=`<h2>Cycle ${cycle} • Day ${day}</h2>`;
const total=Math.floor((e-s)/86400000)+1;const pct=Math.min(100,Math.round(diff/total*100));
document.getElementById('prog').value=pct;document.getElementById('pct').textContent=`${pct}% complete`;
const cal=document.getElementById('calendar');
for(let i=1;i<=21;i++){let d=document.createElement('div');d.className='day '+(i<=14?'on':'off')+(i===day?' today':'');d.textContent=i;cal.appendChild(d);}
const r=document.getElementById('report');r.value=localStorage.getItem('report')||'';r.oninput=()=>localStorage.setItem('report',r.value);