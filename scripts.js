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
    allNames = allNames.push(newName);
}
