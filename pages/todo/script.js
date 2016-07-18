
  var listCount = 0;
  var tasksArr = [];
  
  function duplicateDiv(listItem) {
      console.log(listItem);
   var form = document.getElementById("form");                                      
   form.innerHTML += "<div class=\"stuff\" id=\"" + listItem.divId + "\" onmouseover=\"showX(" + listItem.arrayNum + ")\" " +     //adds full HTML div
    "onmouseout=\"hideX(" + listItem.arrayNum + ")\""      +
   ">\n" +  "<input type=\"checkbox\" id=\"" + listItem.checkBoxId + "\" onchange=\"checkBoxChange(" + listItem.arrayNum + ")\" />\n" +
        "<span id=\"" + listItem.labelId + "\">" + listItem.text + "</span>\n" +
        "<button class=\"x red\" id=\"" + listItem.xId + "\" onclick=\"deleteFunction(" + listItem.arrayNum + ")\">&#10006</button><br></div>";
}


 function keyCode(event) {          
   
  
    var textIn =  document.getElementById("in1").value;
    var x = event.keyCode;
    
    if(x == 13) {   //checks if enter was pressed
    console.log("was " + listCount);
         listCount++;                                 //increments task#
        console.log("Now " + listCount);
         if(listCount == 1) {
             document.getElementById("formReal").innerHTML += 
                                       
                                "<div class=\"stuff footer\" id=\"footer\"> " +
             "<label class=\"left\" id=\"footerLeft\">" + listCount + " items left</label>" +
                "<button id=\"footerAll\" class=\"footerButton\" onclick=\"footerAll()\">All</button>" +
                "<button id=\"footerActive\" class=\"footerButton\" onclick=\"footerActive()\">Active</button>" +
                "<button id=\"footerCompl\"class=\"footerButton\" onclick=\"footerCompl()\">Completed</button>" +
                "<button class=\"clearButton\" onclick=\"clearAll()\">Clear All</button> </div>";
             footerAll(document.getElementById("footerAll"));
         } else {
                 document.getElementById("footerLeft").innerHTML = listCount + " items left";
             } 
         var listItem = new Task(listCount, textIn);  //creates object
         listItem.element = document.getElementById(listItem.divId); 
        duplicateDiv(listItem);                    //if so, adds to list
        tasksArr.splice(listCount, 0 , listItem);                //puts object in array
        
        console.log(document.getElementById("body").innerHTML);
    
        document.getElementsByTagName("input")[0].focus();        //why?!
    }
}
function addFooter() {
    
}

function Task(idNum, text) {        //task object
    
    this.arrayNum = idNum;
    this.divId = "listItem" + idNum;           //<type> id
    this.checkBoxId = "checkBox" + idNum;  
    this.labelId = "label" + idNum;
    this.xId = "x" + idNum;
    this.text = text;   //task text
   
}
function footerAll() {
    var element = document.getElementById("footerAll");
   element.classList.add("borderFooter");
   
}
function footerActive() {
     var element = document.getElementById("footerActive");
      element.classList.add("borderFooter");
}
 function footerCompl() {
     var element = document.getElementById("footerCompl");
        element.classList.add("borderFooter");
 }

    function clearAll() {
              var element =  document.getElementById("formReal");
              element.innerHTML = "<div id=\"form\"><input type=\"text\" autocomplete=\"off\" autofocus id=\"in1\" onkeydown=\"keyCode(event)\" placeholder=\" what needs to be done?\"/></div>";
             tasksArr = [];
             listCount= 0;
            
    }

    function deleteFunction(d) {
    
        var removed = false;
        
        for(var i = 0; i < tasksArr.length; i++) {
        
        if(d == tasksArr[i].arrayNum) {
            listCount--;
          var element = document.getElementById(tasksArr[i].divId);
            element.parentNode.removeChild(element);
            
             tasksArr.splice(i, 1);
             removed = true;
             
             
            if(listCount == 0) {
                
                document.getElementById("footer").innerHTML= "";
             } else {
                 document.getElementById("footerLeft").innerHTML = listCount + " items left";
             }
        }
        if(removed) {
            tasksArr[i] = new Task(i+1, tasksArr[i].text);
        }
    }
     var element =  document.getElementById("form");
     var element2 =  document.getElementById("formReal");
    element.innerHTML = "<input type=\"text\" autocomplete=\"off\" autofocus id=\"in1\" onkeydown=\"keyCode(event)\" placeholder=\" what needs to be done?\"/>";
    
        for(var j = 0; j < tasksArr.length; j++) {
             duplicateDiv(tasksArr[j]);
         }
    }
    function checkBoxChange(id) {
     
        for(var i = 0; i < tasksArr.length; i++) {
        
        if(id == tasksArr[i].arrayNum) {
            if(document.getElementById(tasksArr[i].checkBoxId).checked) {
            document.getElementById(tasksArr[i].divId).style.transitionDuration = ".6s";
           document.getElementById(tasksArr[i].divId).style.color = "#dddddd";
            document.getElementById(tasksArr[i].divId).style.textDecoration = "line-through";
            }
            else {
                document.getElementById(tasksArr[i].divId).style.transitionDuration = "1s";
             document.getElementById(tasksArr[i].divId).style.color = "#000000";
              document.getElementById(tasksArr[i].divId).style.textDecoration= "none";
        }
        }
    }
    }
        
        
function showX(x) {
    
    for(var i = 0; i < tasksArr.length; i++) {
        
        if(x == tasksArr[i].arrayNum) {
            
            x = document.getElementById(tasksArr[i].xId);
        }
    }
    
    x.classList.add("xhover");
}
function hideX(x) {
    
   for(var i = 0; i < tasksArr.length; i++) {
       
        if(x == tasksArr[i].arrayNum) {
            
            x = document.getElementById(tasksArr[i].xId);
        }
    }
    x.classList.remove("xhover");
}
