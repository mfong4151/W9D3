import {htmlGenerator} from "./warmup";
import Clock from "./clock";

const clock = new Clock();

const clockElement = document.getElementById("clock");
htmlGenerator(clock.printTime(), clockElement);

const clockNode = document.querySelector("#clock p");

setInterval(()=> {
  clockNode.innerHTML = clock.printTime()
},1000);

let l = document.createElement('li');
l.innerHTML = "hello";

clockElement.append(l);
