var arr = []; 
 arr[0]= new Image(); 
 arr[0].src = "images/a.jpg";
 arr[1]= new Image();
 arr[1].src = "images/112.png";
 arr[2]= new Image();
 arr[2].src = "images/18.jpg";
 arr[3]= new Image();
 arr[3].src = "images/14.jpg";
 var i=0;
 function slide()
 { document.getElementById("image1").src= arr[i].src;
 i++;
 if(i==arr.length){ i=0; } 
 setTimeout(function(){ slide(); },2000);
 } 