var maps = new Array("map-s.gif","map-m.gif","map-l.gif","map-xl.gif");
var scales = new Array(1.59,1.49,1.33);
var center_x = 0;
var center_y = 0;
var edge_x = 0;
var edge_y = 0;
var current_center_x = 0;
var current_center_y = 0;
var current_edge_x = 0;
var current_edge_y = 0;
const frame_border = document.getElementById("map").getBoundingClientRect().left;

document.getElementById("map").src = maps[1];
document.getElementById("map").src = maps[2];
document.getElementById("map").src = maps[3];
document.getElementById("map").src = maps[0];

function move_left(){
  var map = document.getElementById("map")
  var curr_left = map.offsetLeft;
  var curr_width = map.offsetWidth;
  map.style.left = curr_left+parseInt(400)+"px";
}

function move_right(){
  var map = document.getElementById("map")
  var curr_left = map.offsetLeft;
  var curr_width = map.offsetWidth;
  map.style.left = curr_left-parseInt(400)+"px";
}

function move_up(){
  var map = document.getElementById("map")
  var curr_top = map.offsetTop;
  var curr_height = map.offsetHeight;
  map.style.top = curr_top+parseInt(320)+"px";
}

function move_down(){
  var map = document.getElementById("map")
  var curr_top = map.offsetTop;
  var curr_height = map.offsetHeight;
  map.style.top = curr_top-parseInt(320)+"px";
}

function zoom_in(){
  var curr_map = document.getElementById("map").getAttribute("src");
  var curr_index = 0;
  for (i=0; i<maps.length; i++){
    if (maps[i] == curr_map){
      curr_index = i;
    }
  }
  if (curr_index == maps.length-1){
    document.getElementById("map").src = maps[curr_index];
  } else {
    document.getElementById("map").src = maps[curr_index+1];
    }
  }

function zoom_out(){
  var curr_map = document.getElementById("map").getAttribute("src");
  var curr_index = 0;
  for (i=0; i<maps.length; i++){
    if (maps[i] == curr_map){
      curr_index = i;
    }
  }
  if (curr_index == 0){
    document.getElementById("map").src = maps[curr_index];
  } else {
    document.getElementById("map").src = maps[curr_index-1];
  }
}

function reset(){
  var map = document.getElementById("map");
  map.src = maps[0];
  map.style.top = "0px";
  map.style.left = "0px";
}

function get_top(){
  map = document.getElementById("map");
  map_coordinates = map.getBoundingClientRect();
  return parseInt(map_coordinates.top);
}

function get_left(){
  map = document.getElementById("map");
  map_coordinates = map.getBoundingClientRect();
  return parseInt(map_coordinates.left);
}

function get_height(){
  return 640;
}

function get_width(){
  return 800;
}

function in_map(x,y){
  if ((x <= 800+frame_border) && (x >= frame_border)){
    if ((y <= 640+frame_border) && (y >= frame_border)){
      return 1
    } else {
      return 0
    }
  } else {
    return 0
  }
}

var dragging = false;

function drag(event){

  document.getElementById("map").style.cursor = "move";
  if (in_map(event.clientX,event.clientY) == 1){
    center_x = event.clientX;
    center_y = event.clientY;
    edge_x = map.getBoundingClientRect().left;
    edge_y = map.getBoundingClientRect().top;
    dragging = true;
  }
  event.preventDefault();
}

function move(event){
  var map = document.getElementById("map");
  if (dragging == true){
    map.style.left = (event.clientX-center_x-frame_border+edge_x)+"px";
    map.style.top = (event.clientY-center_y-frame_border+edge_y)+"px";
    event.preventDefault();
  }
}

function release(event){
  var map = document.getElementById("map");
  if (dragging == true){
    map.style.left = (event.clientX-center_x-frame_border+edge_x)+"px";
    map.style.top = (event.clientY-center_y-frame_border+edge_y)+"px";
    dragging = false;
    center_x = 0;
    center_y = 0;
    document.getElementById("map").style.cursor = "default";
  }
}

function center(event){

  var map = document.getElementById("map");
  current_edge_x = map.getBoundingClientRect().left;
  current_edge_y = map.getBoundingClientRect().top;
  current_center_x = current_edge_x+400;
  current_center_y = current_edge_y+320;
  map.style.left = (current_center_x-event.clientX)+"px";
  map.style.top = (current_center_y-event.clientY)+"px";
}

document.addEventListener("mousedown",drag,false);
document.addEventListener("mousemove",move,false);
document.addEventListener("mouseup",release,false);
document.getElementById("left").addEventListener("click",move_left,false);
document.getElementById("right").addEventListener("click",move_right,false);
document.getElementById("up").addEventListener("click",move_up,false);
document.getElementById("down").addEventListener("click",move_down,false);
document.getElementById("zoom_in").addEventListener("click",zoom_in,false);
document.getElementById("zoom_out").addEventListener("click",zoom_out,false);
document.getElementById("reset").addEventListener("click",reset,false);
document.getElementById("map").addEventListener("dblclick",center,false);
