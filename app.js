
function todayKey(){return new Date().toISOString().slice(0,10);}

function saveDailyReport(){
const report={
date:todayKey(),
am:document.getElementById("am")?.checked||false,
pm:document.getElementById("pm")?.checked||false,
lap:document.getElementById("lap")?.checked||false,
fatigue:document.getElementById("fatigue")?.value||"",
bone:document.getElementById("bone")?.value||"",
mouth:document.getElementById("mouth")?.value||"",
hfs:document.getElementById("hfs")?.value||"",
weight:document.getElementById("weight")?.value||"",
water:document.getElementById("water")?.value||"",
notes:document.getElementById("notes")?.value||""
};
localStorage.setItem("report_"+todayKey(),JSON.stringify(report));
alert("Today's report saved.");
}

function viewDailyReport(){
const txt=document.getElementById("dailyReport");
const raw=localStorage.getItem("report_"+todayKey());
if(!raw){txt.textContent="No report saved for today.";return;}
const r=JSON.parse(raw);
txt.textContent=`Date: ${r.date}

Morning Xeloda: ${r.am?"✓":"✗"}
Evening Xeloda: ${r.pm?"✓":"✗"}
Lapatinib: ${r.lap?"✓":"✗"}

Fatigue: ${r.fatigue}/10
Bone Pain: ${r.bone}/10
Mouth Sores: ${r.mouth}/10
Hand-Foot: ${r.hfs}/10

Weight: ${r.weight} kg
Water: ${r.water} glasses

Notes:
${r.notes}`;
}

document.getElementById("saveDay")?.addEventListener("click",saveDailyReport);
document.getElementById("viewDay")?.addEventListener("click",viewDailyReport);
