



function grid(x = 5, y = 10){
  const container = document.getElementById("container");
  for (let i = 0; i < x; i++) {
      const row = document.createElement('div');
      row.classList.add('rows');
      container.appendChild(row);

      for (let j = 0; j < y; j++) {
          const divs = document.createElement('div');
          divs.classList.add('divs');
          row.appendChild(divs);
      }
  }    
}  

grid(9, 9);

let elem = document.getElementsByClassName("divs");
    
    for (var i = 0; i < 81; i += 1) {
    
          elem[i].addEventListener("mouseover", function( event ) {
          // highlight the mouseover target
          event.target.style.backgroundColor = "orange";
        }, false);
      } 


