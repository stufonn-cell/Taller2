const pokeneas = require('../data/pokeneas');
const getContainerId = require('../utils/containerId');

function pickRandom(arrayPokeneas) {
  return arrayPokeneas[Math.floor(Math.random() * arrayPokeneas.length)];
}

exports.randomJson = (req, res) => {
  const randomPokenea = pickRandom(pokeneas);
  const payload = {
    id: randomPokenea.id,
    name: randomPokenea.name,
    height: randomPokenea.height,
    ability: randomPokenea.ability,
    containerId: getContainerId(),
  };
  res.json(payload);
};


