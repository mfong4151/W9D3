
const partyHeader = document.getElementById('party');
let newP;

console.log("warmup");


export const htmlGenerator = (string, htmlElement) => {
   newP = document.createElement("p");
   newP.innerHTML = string;
   partyHeader.append(newP);
};

htmlGenerator('Party Time!!!!', partyHeader);
