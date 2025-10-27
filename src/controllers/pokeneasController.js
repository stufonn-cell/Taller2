const pokeneas = require('../data/pokeneas');
const getContainerId = require('../utils/containerId');

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

exports.randomJson = (req, res) => {
  const p = pickRandom(pokeneas);
  const payload = {
    id: p.id,
    nombre: p.nombre,
    altura: p.altura,
    habilidad: p.habilidad,
    containerId: getContainerId(),
  };
  res.json(payload);
};


