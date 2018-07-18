var cvs =  document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');

//toit de la maison/
ctx.beginPath();
ctx.moveTo(250,50);
ctx.lineTo(150,150);
ctx.lineTo(350,150);
ctx.fillStyle = '#D7823E';
ctx.fill();
//carré de la maison//
ctx.fillStyle = "#A1D8E6";
ctx.fillRect(150,150,200,200);
//porte de la maison//
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(230,270,40,80);
//fenetre gauche//
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(180,180,40,40);
//fenetre droite//
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(280,180,40,40);
