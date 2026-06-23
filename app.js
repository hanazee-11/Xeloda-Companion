const s=new Date('2026-06-12'),e=new Date('2026-10-15'),t=new Date();
const d=Math.max(0,Math.floor((t-s)/86400000)),c=Math.min(6,Math.floor(d/21)+1),day=d%21+1;
document.getElementById('status').textContent=day<=14?'🟢 ON Medication':'⚪ OFF Week';
document.getElementById('cycle').textContent=`Cycle ${c} • Day ${day}`;
document.getElementById('fill').style.width=Math.min(100,Math.round(d/((e-s)/86400000+1)*100))+'%';
['am','pm','lap','water','weight','fatigue','bone','mouth'].forEach(id=>{
 const el=document.getElementById(id);
 if(localStorage.getItem(id)!=null){
   if(el.type==='checkbox') el.checked=localStorage.getItem(id)==='1';
   else el.value=localStorage.getItem(id);
 }
 el.oninput=el.onchange=()=>localStorage.setItem(id,el.type==='checkbox'?(el.checked?'1':'0'):el.value);
});