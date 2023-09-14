function calcSquareArea(side) {
    return side * side
}

function calcSquarePerimeter(side) {
    return 4 * side
}

function displayArea() {
    var side = document.getElementById("inputField").value
    
    alert(calcSquareArea(side))
}

function displayPerimeter() {
    var side = document.getElementById("inputPerimeterField").value
    alert(calcSquarePerimeter(side))
}

function resetInputArea() {
    document.getElementById("inputField").value = ""
}

function resetInputPerimeter() {
    document.getElementById("inputPerimeterField").value = ""
}