canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,45,0,2*Math.PI);
ctx.stroke();

colr="blue";

ctx.beginPath();
ctx.strokeStyle=colr;
ctx.lineWidth=2;
ctx.arc(150,150,45,0,2*Math.PI);
ctx.stroke();

clr="green";

ctx.beginPath();
ctx.strokeStyle=clr;
ctx.lineWidth=2;
ctx.arc(250,150,45,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(300,200,45,0,2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle=colr;
ctx.lineWidth=2;
ctx.arc(350,150,45,0,2*Math.PI);
ctx.stroke();
