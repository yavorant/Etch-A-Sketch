
//let div = document.createElement("div");
//document.body.appendChild(div);
const container = document.getElementById("container");

let x = 9, y = 9;

for (let i = 0; i < x; i++) {
    const row = document.createElement('div');
        container.appendChild(row);

    for (let j = 0; j < y; j++) {
        const divs = document.createElement('div');
        divs.classList.add('divs');
        row.appendChild(divs);
    }
}    
/*
var x=8;
var y=8;

var chessBoard = document.getElementById("chessBoard");

for (var i=0; i<y; i++){
    var row = chessBoard.appendChild(document.createElement("div"));
    for (var j=0; j<x; j++){
        row.appendChild(document.createElement("span"));
    }
}*/