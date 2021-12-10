let arealTrekant = (widt, height) => {
  areal = (widt * height) / 2;
  return areal;
};

let arealFirkant = (widt, height) => {
  areal = widt * 2 + height * 2;
  return areal;
};

function totalAreal() {
  areal = arealFirkant(5, 8) + arealTrekant(5, 8);
  return areal;
}

console.log(totalAreal());
