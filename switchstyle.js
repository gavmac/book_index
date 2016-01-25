/*
   New Perspectives on JavaScript, 2nd Edition
   Tutorial 7
   Tutorial Case

   Author: Gavin Macken  
   Date:28 March `15

   Filename: switchStyle.js

   Global Variables:
   allStyles
      An array containing the link elements whose rel attribute equals "stylesheet"
      or "alternate stylesheet" and whose title attribute is not empty

   Functions List:

   addEvent(object, evName, fnName, cap)
      Adds an event hander to object where evName is the name of the event,
      fnName is the function assigned to the event, and cap indicates whether
      event handler occurs during the capture phase (true) or bubbling
      phase (false)

   makeStyleButtons()
      Generate input buttons for each preferred and alternate style sheet linked
      to the current Web document

   changeStyle()
      Changes style sheet from the currently active sheet to whatever style sheet
      is clicked by the user from the selection of input buttons

*/

function addEvent(object, evName, fnName, cap) {
   if (object.attachEvent)
       object.attachEvent("on" + evName, fnName);
   else if (object.addEventListener)
       object.addEventListener(evName, fnName, cap);
}

addEvent(window,  "load",  makeStyleButtons,  false);

/* Global Variables:
   allStyles
      An array containing the link elements whose rel attribute equals "stylesheet"
      or "alternate stylesheet" and whose title attribute is not empty
*/
var allStyles = new Array();


function  makeStyleButtons()  {

var allLinks = document.getElementsByTagName("link");

//  Create  an  array  of  preferred  or  alternate  style  sheets
for  (var  i  =  0;  i  <  allLinks.length;  i++)  {
   if ((allLinks[i].rel == "stylesheet" ||
      allLinks[i].rel  ==  "alternate stylesheet")  &&
      allLinks[i].title  !=  "")  {
      allStyles.push(allLinks[i]);
      }
   }

  
// Create buttons for each preferred or alternate style sheet
var  styleBox  =  document.createElement("div");

for  (var i = 0; i < allStyles.length; i++)  {

   //  Initialize  the  style  sheets
   if  (allStyles[i].rel == "stylesheet")  {
      allStyles[i].disabled = false;
      }  else  {
      allStyles[i].disabled = true;
   }

   styleButton  =  document.createElement("input");
   styleButton.type = "button";
   styleButton.value = allStyles[i].title + " view";
   styleButton.title = allStyles[i].title;

   // Apply an event handler to the style button
   
   styleButton.onclick = changeStyle;

   styleBox.appendChild(styleButton);

   // Define th estyles of each button
   styleButton.style.width = "120px";
   styleButton.style.fontSize = "12px";
}
   


// Define the styles of the box containing the buttons
   styleBox.style.width = "125px";
   styleBox.style.cssFloat = "right";
   styleBox.style.styleFloat = "right";
   styleBox.style.margin = "5px  5px  10px  10px";

   //  Add  the  style  box  to  the  source  document
   var  sourceDoc  =  document.getElementById("doc");
   sourceDoc.insertBefore(styleBox,  sourceDoc.firstChild);
}

function  changeStyle()  {
   for (var i = 0; i < allStyles.length; i++) {
      if (allStyles[i].title == this.title) {
      allStyles[i].disabled = false;
      } else {
      allStyles[i].disabled = true;
      }
   }
}
