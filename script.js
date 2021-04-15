
const container = document.getElementById("container");

let x = 9, y = 9;

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
