var boolClicked;
var lClick;
var xTurn;

function reset(boolOne) {
    boolClicked = [false, false, false,
                   false, false, false, 
                   false, false, false];
                   
    lClick = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    if(boolOne) {
        for(var i = 1; i <= boolClicked.length; i++) {
             document.getElementById(i).style.backgroundColor = "#ffffff";
        document.getElementById(i).style.color = "#000000";
        document.getElementById("inner" + i).style.visibility = "hidden";  
        }
    }
    setXTurn();
    xTurn = true;
}

function chooseSquare(id) {
    
    if(xTurn && !boolClicked[id - 1]) {
        console.log("first one \n");
        document.getElementById(id).style.backgroundColor = "#ac362c";
        document.getElementById(id).style.color = "#000000";
        document.getElementById("inner" + id).style.visibility = "visible";
        boolClicked[id - 1] = true;
        lClick[id - 1] = "x";
        setYTurn();
    } else if(!boolClicked[id - 1]) {
         console.log("2 one \n");
         document.getElementById(id).style.backgroundColor = "#E3C000";
        document.getElementById(id).style.color = "#000000";
        document.getElementById("inner" + id).style.visibility = "visible";
        boolClicked[id - 1] = true;
        lClick[id - 1] = "y";
        setXTurn();
    }
    check();
    xTurn = !xTurn;
}

function check() {
    if( (lClick[0] == lClick[1] && lClick[1] == lClick[2])   || //first row
        (lClick[0] == lClick[3] && lClick[3] == lClick[6])   ||         //first column  
        (lClick[0] == lClick[4] && lClick[4] == lClick[8])   || //diagonal down
        (lClick[1] == lClick[4] && lClick[4] == lClick[7])   ||         //second column
        (lClick[2] == lClick[5] && lClick[5] == lClick[8])   || //third column
        (lClick[3] == lClick[4] && lClick[5] == lClick[6])   ||         //second row
        (lClick[6] == lClick[7] && lClick[7] == lClick[8])   || //thrid row
        (lClick[2] == lClick[4] && lClick[4] == lClick[6]) )            //diagonal up  
        {   
            if(xTurn) {
                alert("Game Over! X's Win!!!");
            } else {
                alert("Game Over! Y's Win!!!");
            }
            reset(true);
        } else if(lClick[0] == true && lClick[1] == true && lClick[2] == true && lClick[3] == true &&
        lClick[4] == true && lClick[5] == true && lClick[6] == true && lClick[7] == true && 
        lClick[8] == true && lClick[9] == true) {
            alert("Game Over! It's a Draw!!!");
            reset(true);
        }
}

function setXTurn() {
   for(var i = 1; i <= boolClicked.length; i++) {
        if(!boolClicked[i - 1]) {
        document.getElementById("inner" + i).classList.add("xTurn");
        document.getElementById("inner" + i).classList.remove("yTurn");
        document.getElementById("inner" + i).innerHTML = "X";
        } 
    }
    
}
function setYTurn() {
   for(var i = 1; i <= boolClicked.length; i++) {
        if(!boolClicked[i - 1]) {
        document.getElementById("inner" + i).classList.remove("xTurn");
        document.getElementById("inner" + i).classList.add("yTurn");
        document.getElementById("inner" + i).innerHTML = "Y";
        }
    }
    
}

reset(false);