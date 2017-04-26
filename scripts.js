
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

