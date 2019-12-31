var compList = [
  {
    name: "Ercan",
    credit: 0,
    debt: 0
  },
  {
    name: "Fulya",
    credit: 0,
    debt: 0
  },
  {
    name: "Kenz",
    credit: 0,
    debt: 0
  }
];

/*compList.push({name: "Dana",
    credit: 0,
    debt: 0})*/


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var btnAddCompany = document.getElementsByClassName("addcompany")[0];
var inputAddCompany = document.getElementsByClassName("addcompanyinput")[0];

var delDiv = 0;
var action = "";
var allChild = [];
var motor = document.querySelector(".mygir");
var mainBody = document.querySelector("body");
var mainDiv = document.querySelector(".main");
var selectList = document.querySelector(".selectlist");
var dclist = document.querySelector(".dclist");

motor.addEventListener("keypress", addDiv);
mainBody.addEventListener("DOMContentLoaded", addDiv);
//motor.addEventListener("DOMContentLoaded", divList);

function divList() {
  console.log("loading...");
}

btn.onclick = function(){
  modal.style.display = "block"
}

span.onclick = function(){
  modal.style.display = "none"
}

btnAddCompany.onclick = function(){
  
  var inputValue = inputAddCompany.value;
  const parent = document.getElementsByClassName("main")[0];
while (parent.firstChild) {
    parent.firstChild.remove();
  selectList.lastChild.remove()
}
  compList.push({ name: inputValue,
    credit: 0,
    debt: 0})
  starterFunc()
  console.log(inputValue)
}

function addDiv(e) {
  if (e.keyCode === 13) {
    var dcValue = dclist.options[dclist.selectedIndex].value;
    var cmpListValue = selectList.options[selectList.selectedIndex].value;
    // console.log(dcValue, cmpListValue);
    //addDiv();
    if (dcValue == "debit") {
      action = "DEBIT  ";
      delDiv = 3;
      for (var i = 0; i < compList.length; i++) {
        if (compList[i].name == cmpListValue) {
          compList[i].debt += parseInt(motor.value);
          //console.log(compList[i].debt);
          var idComp = document.querySelector("#" + cmpListValue);
          idComp.childNodes[2].nodeValue = "CREDIT " + compList[i].debt;
          //console.log(idComp.childNodes);
          //idComp.childNodes[0].text = 5;
          /*var text2 = document.createTextNode(action + compList[i].debt);
          var hr = document.createElement("hr");

          addNew(idComp, text2, hr, 3);
          idComp.removeChild(idComp.childNodes[delDiv]);*/
          //console.log("#" + dcValue);
        }
      }
    }
    if (dcValue == "credit") {
      action = "CREDIT  ";
      delDiv = 2;
      for (var i = 0; i < compList.length; i++) {
        if (compList[i].name == cmpListValue) {
          compList[i].credit += parseInt(motor.value);
          //console.log(compList[i].debt);
          var idComp = document.querySelector("#" + cmpListValue);
          //idComp.childNodes[0].text = 5;
          idComp.childNodes[4].nodeValue = "DEBIT " + compList[i].credit;
          /*var text2 = document.createTextNode(action + compList[i].credit);
          var hr = document.createElement("hr");

          addNew2(idComp, text2, 0);

          console.log(idComp);
          idComp.removeChild(idComp.childNodes[0]);*/
        }
      }
    }

    //console.log(delDiv);
    /* for (var i = arr.length - 1; i >= 0; i--) {
      //console.log(arr[i])
      arr2 += arr[i];

      motor.value = arr2;
    }*/
  }
}

function addNew(idComp, text2, hr, j) {
  //var lastElement = idComp.lastElementChild;
  idComp.removeChild(idComp.childNodes[j + 1]);

  idComp.appendChild(hr);

  idComp.appendChild(text2);
}

function addNew2(idComp, text2, j) {
  //var lastElement = idComp.childNodes[2];
  idComp.removeChild(idComp.childNodes[j + 1]);

  idComp.appendChild(text2);

  //idComp.appendChild(hr);

  //idComp.appendChild(hr);
}

function starterFunc() {
  compList.forEach(function(item, key) {
    //console.log(item.name);
    createDiv(item);
  });
}

function createDiv(e) {
  var newChild = document.createElement("DIV");
  var hr = document.createElement("hr");
  var br = document.createElement("br");
  var option = document.createElement("option");
  option.value = e.name;
  option.text = e.name;
  var text = document.createTextNode(e.name);
  var text1 = document.createTextNode("CREDIT " + e.credit);
  var text2 = document.createTextNode("DEBIT" + e.debt);
  newChild.classList.add("newchild");
  newChild.id = e.name;
  mainDiv.appendChild(newChild);
  newChild.appendChild(text);
  newChild.appendChild(hr);
  newChild.appendChild(text1);
  newChild.appendChild(br);
  newChild.appendChild(text2);
  selectList.appendChild(option);
}

//createDiv();

//console.log(selectList[0]);
