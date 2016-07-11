var bools = [,,,,,,,];

function togglePopDown(elementId) {
    console.log("clicked");
    if(bools[elementId - 1] == null || !bools[elementId - 1]) {
        bools[elementId - 1] = true;
        document.getElementById(elementId + "drop").style.visibility = "visible";
        console.log("set to true");
    } 
    else if(bools[elementId - 1]) {
        document.getElementById(elementId + "drop").style.visibility = "hidden";
        bools[elementId - 1] = false;
        console.log("set to false");
    }
}