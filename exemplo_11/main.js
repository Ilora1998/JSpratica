var nipes = ['♥', '♦', '♣', '♠'];
var faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'J', 'K'];
var nipe = nipes[Math.floor(Math.random()*4)];
var face = faces[Math.floor(Math.random()* faces.length)];

document.write("<h1>" + face + nipe + "</h1>");

/*Mostrar todas as cartas do baralho
var i, j;
for(i=0; i<=3; i++){
    for(j=0; j<faces.length; j++){
        document.write( faces[j] + nipes[i] + " ");
    }
    document.write("<br>" + "<br>");
}*/