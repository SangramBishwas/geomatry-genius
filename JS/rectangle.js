function getRectangleAria() {
    const rectangleWidth = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidth.value;
    const width = parseFloat(rectangleWidthText);
    const rectangleLength = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLength.value;
    const length = parseFloat(rectangleLengthText);
    const area = width * length;
    //console.log(area);
    const areaOfRectangle = document.getElementById('area-rectangle');
    areaOfRectangle.innerText = area;
}