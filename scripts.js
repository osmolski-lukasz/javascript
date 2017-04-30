// zadanie 9.1 funkcje
function getTriangleArea(a, h) {
    if ((a < 0) || (h < 0)) {
        return 'Nieprawidłowe dane';
    }
    else if ((a > 0) || (h > 0)) {
        return a*h/2;
    }

}

console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(5, 10);
var triangle2Area = getTriangleArea(10, 20);
var triangle3Area = getTriangleArea(3, 8);



//zadanie 9.2 tablice
var maleNames = ['Jan', 'Marian', 'Łukasz', 'Piotr', 'Maciek'];
var femaleNames = ['Dorota', 'Małgorzata', 'Helena', 'Marianna', 'Ela'];

var allNames = maleNames.concat(femaleNames);

var newName ='Zdzich';

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
}

// 9.3 łańcuchy
console.clear();

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';

var animal = 'Zielone słonie';

animal = animal.toUpperCase();

text = text.replace('Papugi', animal);

console.log(text.substr(0, text.length / 2));

// 9.4 pętle
console.clear();

function drawTree(h) {
    for (var i = 0 ; i < h ; i++) {
        var star = '';
        for (var j = 0 ; j < i+1 ; j++) {
            star += '*';
        }           
        console.log(star); 
    }        
}

console.clear();

// 9.5 DOM

var buttons = document.getElementsByClassName('button');

function klikanie() {
    for (var c = 0 ; buttons.length > c ; c++) {
        alert(buttons[c].innerText);
    }    
}