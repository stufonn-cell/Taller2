const pokeneas = require('../data/pokeneas');
const getContainerId = require('../utils/containerId');

function getRandomPick(arrayPokeneas) {
  return arrayPokeneas[Math.floor(Math.random() * arrayPokeneas.length)];
}

function getRandomPokenea(req, res) {
  const randomPokenea = getRandomPick(pokeneas);
  const HTMLPayload = `
        <div>
          <h1>${getContainerId()}</h1>
          <h2>${randomPokenea.name}</h2>
          <img src="${randomPokenea.image}"></img>
          <p>${randomPokenea.phrase}</p>
        </div>
  `;

  res.send(HTMLPayload);
}

module.exports = {
  getRandomPokenea
};