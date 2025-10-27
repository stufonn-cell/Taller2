const pokeneas = require('../../data/pokeneas');
const getContainerId = require('../../utils/containerId');

function getRandomPick(arrayPokeneas) {
  return arrayPokeneas[Math.floor(Math.random() * arrayPokeneas.length)];
}

function getRandomPokenea(req, res) {
  const randomPokenea = getRandomPick(pokeneas);
  const payload = {
    id: randomPokenea.id,
    name: randomPokenea.name,
    height: randomPokenea.height,
    ability: randomPokenea.ability,
    containerId: getContainerId(),
  };

  res.json(randomPokenea);
}

module.exports = {
  getRandomPokenea
};


