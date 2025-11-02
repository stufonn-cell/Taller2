const pokeneas = require('../data/pokeneas');
const getContainerId = require('../utils/containerId');
const staticURL = "https://storage.googleapis.com/pokeneas-bucket-col1"

function getRandomPick(arrayPokeneas) {
  return arrayPokeneas[Math.floor(Math.random() * arrayPokeneas.length)];
}

function getRandomPokenea(req, res) {
  const randomPokenea = getRandomPick(pokeneas);
  const viewData = {
    poke_image : staticURL + randomPokenea.image,
    poke_phrase : randomPokenea.phrase + " - " + getContainerId(),
    poke_name : randomPokenea.name.toUpperCase(),
    poke_audio : staticURL + randomPokenea.audio
  };

  res.render('index', viewData);
}

module.exports = {
  getRandomPokenea
};