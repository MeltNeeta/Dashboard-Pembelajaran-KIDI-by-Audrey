// Applying Computation
// Penjumlahan
function calculatePlus() {
    var Box1 = Number(document.getElementById('plus-1').value);
    var Box2 = Number(document.getElementById('plus-2').value);
    var resultPlus = document.getElementById('result-plus');
    var myResult = Box1 + Box2; resultPlus.value = myResult;
}
// Pengurangan
function calculateMinus() {
    var Box1 = Number(document.getElementById('minus-1').value);
    var Box2 = Number(document.getElementById('minus-2').value);
    var resultMinus = document.getElementById('result-minus');
    var myResult = Box1 - Box2; resultMinus.value = myResult;
}
// Perkalian
function calculateTimes() {
    var Box1 = Number(document.getElementById('times-1').value);
    var Box2 = Number(document.getElementById('times-2').value);
    var resultTimes = document.getElementById('result-times');
    var myResult = Box1 * Box2; resultTimes.value = myResult;
}
// Pembagian
function calculateDiv() {
    var Box1 = Number(document.getElementById('div-1').value);
    var Box2 = Number(document.getElementById('div-2').value);
    var resultDiv = document.getElementById('result-div');
    var myResult = Box1 / Box2; resultDiv.value = myResult;
}