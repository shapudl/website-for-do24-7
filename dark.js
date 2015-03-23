$(document).ready(function(){
console.log("ready");


$("#newbg").click(function() {
  console.log("inside");
  $("body").css("background",'url("noise.png") #26D0FF repeat');
  $("#newbg").text("Are you sure");
});


});
