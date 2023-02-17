function getInputValue(id) {
  const valueString = document.getElementById(id).value;
  const value = parseFloat(valueString);
  return value;
}

function traingleArea(value1, value2) {
  const result = 0.5 * value1 * value2;
  return result;
}

document.getElementById("tri-btn").addEventListener("click", function () {
  const baseValue = getInputValue("tri-base-value");
  const heightValue = getInputValue("tri-height-value");
   if(baseValue>=0 && heightValue>=0) {
    const areaTraingle = traingleArea(baseValue, heightValue);
    const triArea = areaTraingle.toFixed(2);
    console.log(triArea);
  }
  else
  alert("plz enter a valid input");
});
