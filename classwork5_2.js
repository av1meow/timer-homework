var list = document.createElement("ul");
console.log(list);
var li1 = document.createElement("li");
li1.textContent = "Edmund Kemper";
var li2 = document.createElement("li");
li2.textContent = "Ted Bundy";
var li3 = document.createElement("li");
li3.textContent = "Jhon Wayne Gacy";
var li4 = document.createElement("li");
li4.textContent = "Jeffery Dahmer";
var div = document.getElementById("js");
var liArr = [li1, li2, li3, li4];
div.append(list);

var clock = setInterval(myfunction,2000);

var i = 0;
function myfunction(){

  if (i < 4){
    list.append(liArr[i]);
    i++;
    }else{
        clearInterval(clock);
  };
};
myfunction()
