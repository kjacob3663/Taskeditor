function rotate(){
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.clearRect(0,0,1500,1600);
ctx.translate(0, ctx.canvas.height);
ctx.rotate(-90* Math.PI / 180);
ctx.drawImage(img,0,0,ctx.canvas.width, ctx.canvas.height);
};