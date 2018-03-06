let chooseRandomFour = (arrData, targetArr) => {
  let randomIndexGenerator = length => {
    return Math.floor(Math.random() * length);
  };
  while (targetArr.length < 5) {
    // if doc is not present in targetArr
    if (
      targetArr.indexOf(arrData[randomIndexGenerator(arrData.length)]) === -1
    ) {
      targetArr.push(arrData[randomIndexGenerator(arrData.length)]);
    }
  }
};

module.exports.chooseRandomFour = chooseRandomFour;
