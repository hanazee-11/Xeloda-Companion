const S=new Date('2026-06-12'),E=new Date('2026-10-15'),T=new Date();
const d=Math.max(0,Math.floor((T-S)/86400000)),cycle=Math.min(6,Math.floor(d/21)+1),day=d%21+1;
const total=Math.floor((E-S)/86400000)+1,p=Math.min(100,Math.round(d/total*100));
document.getElementById('title').textContent=`Cycle ${cycle} • Day ${day} ${day<=14?'🟢 ON':'⚪ OFF'}`;
document.getElementById('bar').style.width=p+'%';
document.getElementById('percent').textContent=`${p}% complete`;
['am','pm','lap','fatigue','bone','mouth','hfs','weight','water','notes'].forEach(id=>{
 let e=document.getElementById(id),v=localStorage.getItem(id);
 if(v!==null){if(e.type==='checkbox')e.checked=v==='1';else e.value=v;}
 let save=()=>localStorage.setItem(id,e.type==='checkbox'?(e.checked?'1':'0'):e.value);
 e.oninput=save;e.onchange=save;
});