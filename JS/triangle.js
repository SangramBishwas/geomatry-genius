/**Objective: get base, height of a triangle. Calculate the area by using provided formula. and display it. 
 * step1: Get the value of base and the value of height of the triangle.
 * step2: add an id in the input field and access this id by "document.getElementById('')"
 * step3: get the value from the input field. (value is string now)
 * step4: convert the value to number. (use parseFloat)
 */

function calculateTriangleArea() {
    // get the value of base in triangle
    const triangleInputBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleInputBase.value;
    const base = parseFloat(triangleBaseValue);
    console.log(base);
    // get the vlaue of height in triangle
    const triangleInputHeight = document.getElementById('triangle-height');
    const triangleHeightValue = triangleInputHeight.value;
    const height = parseFloat(triangleHeightValue);
    console.log(height)
    // calculate the area
    const area = 0.5 * base * height;
    console.log(area)
    const valueOfArea = document.getElementById('area-value');
    valueOfArea.innerHTML = area;

}