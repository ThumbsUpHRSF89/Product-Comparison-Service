let chooseRandomFour = (arrData, targetArr) => {
  let randomIndexGenerator = length => {
    return Math.floor(Math.random() * length);
  };
  let listOfIndices = [targetArr[0].id];
  while (targetArr.length < 5) {
    let randomIndex = randomIndexGenerator(arrData.length);
    // if doc is not present in targetArr
    if (targetArr.indexOf(arrData[randomIndex]) === -1) {
        targetArr.push(arrData[randomIndex]);
    }
  }
};

module.exports.chooseRandomFour = chooseRandomFour;
