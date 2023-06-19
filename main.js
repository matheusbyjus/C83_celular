var lastPositionx, lastPositiony;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
largura=1;

var width= screen.width;

novalargura= screen.width-70;
novaaltura= screen.height-300;

if (width<992) {
    document.getElementById("myCanvas").width=novalargura;
    document.getElementById("myCanvas").height=novaaltura;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",myTouchStart);

function myTouchStart(e){
    color=document.getElementById("color").value;
    largura=document.getElementById("largura").value;
    positionX=e.touches[0].clientX-canvas.offsetLeft;
    positionY=e.touches[0].clientY-canvas.offsetTop;

}

canvas.addEventListener("touchmove",myTouchMove);

function myTouchMove(e){
    MouseX=e.touches[0].clientX-canvas.offsetLeft;
    MouseY=e.touches[0].clientY-canvas.offsetTop;
 
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=largura;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + positionX + "y = " + positionY);

        ctx.moveTo(positionX,positionY);

        console.log("current position of x and y coordinates = ");
        console.log("x = " + MouseX + "y = " + MouseY);

        ctx.lineTo(MouseX, MouseY);
        ctx.stroke();
    
    positionX=MouseX;
    positionY=MouseY;
}



function limpar(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}