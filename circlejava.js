function drawCircle(){

var radius = document.getElementsByName('inputtedRadius')[0].value;

function calcArea(){
  return (radius*radius*3.14);
}
var area = calcArea(radius);
// console.log(area);


var declareArea = document.getElementById('areaDeclared');
declareArea.innerText = "The area of this circle is: " + area + "! ";
declareArea.style.color='white';
declareArea.style.textAlign='center';
document.body.appendChild(declareArea);

///// CIRCLE DIV       /////////////////////


//Mercury
if(radius <=38){
var planet = "Mercury";
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/mercury.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
  circleDiv.style.margin = '0 auto';
  circleDiv.appendChild(circleDiv);

//Mars
}else if(radius>=39 && radius<=53)
{
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/mars.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
  circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
// //Venus
}else if(radius>=54 && radius<=95)
{var circleDiv =     document.getElementById('circleDiv');
circleDiv.style.backgroundImage="url(images/venus.png)";
  circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
// //Earth
}else if(radius>=96 && radius<=120){
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/earth.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
}
// //Neptune
else if(radius >= 121 && radius <=388){
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/neptune.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
}
// //Uranus
else if(radius>=389 && radius <= 420){
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/uranus.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
// //Saturn
}else if (radius>=421 && radius <= 945){
  var circleDiv = document.getElementById('circleDiv');
  circleDiv.style.backgroundImage="url(images/saturn.png)";
    circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
//Jupiter
}else if (radius>946 && radius <= 1120){
var circleDiv = document.getElementById('circleDiv');
circleDiv.style.backgroundImage="url(images/jupiter.png)";
  circleDiv.style.backgroundSize='cover';
  circleDiv.style.borderRadius = '50%';
  circleDiv.style.width = (radius*2) + 'px';
  circleDiv.style.height = (radius*2)+'px';
 circleDiv.style.margin = 'auto';
  circleDiv.appendChild(circleDiv);
}else{
    alert("You broke both space and time :[ Try again with a smaller radius");
}
///// CIRCLE DIV     /////////////////////

}
