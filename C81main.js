canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";

ctx.beginPath();
ctx.styleStroke=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.styleStroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouse_x=e.clintX-canvas.offsetLeft;
    mouse_y=e.clintY-canvas.offsetTop;
    console.log("X="+mouse_x+",Y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.styleStroke=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.styleStroke();
}