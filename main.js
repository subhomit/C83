var canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

var last_position_of_x, last_position_of_y;
var current_position_of_x, current_position_of_y;
var color = "green";
var width_of_line = 1;
var screen_width = screen.width;
var new_width = screen_width - 70
var screen_height = screen.height;
var new_height = screen_height - 300;
if(screen_width < 992){
     document.getElementById("myCanvas").width = new_width;
     document.getElementById("myCanvas").height = new_height;
     document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e){
    console.log("my_touchstart");
    last_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientX-canvas.offsetTop;
}
canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e){
    console.log("touchmove");
    current_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y = e.touches[0].clientY-canvas.offsetTop;    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        console.log("last x = " + last_position_of_x + " last y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current x = " + current_position_of_x + " current y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}
