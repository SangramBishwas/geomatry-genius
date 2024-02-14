function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId)
    const inputFieldText = inputField.value;
    const inputFieldValue = parseFloat(inputFieldText);
    return inputFieldValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
function calculateParallelogram() {
    const base = getInputValueById('parallelogram-base')
    const height = getInputValueById('parallelogram-height')
    const area = base * height;
    setInnerTextById('area-parallelogram', area)
}