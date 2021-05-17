function hoverButton() {
  document.getElementById("btn").style.backgroundColor = "#080";
}
function Hover() {
  document.getElementById("btn").style.backgroundColor = "#00bcba";
}
function show() {
  document.getElementById("click").style.visibility = "visible";
}
function hide() {
  document.getElementById("click").style.visibility = "hidden";
}
var n = 0;
function hover() {
  n += 1;
  document.getElementById("img1").innerHTML = n;
}
function clc() {
  document.getElementById("clicks").style.color = "red";
  document.getElementById("clicks").style.textDecoration = "underline";
}
function cli() {
  document.getElementsByClassName("clicks").style.color = "red";
  document.getElementsByClassName("clicks").style.textDecoration = "underline";
}
