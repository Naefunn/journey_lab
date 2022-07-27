const Journey = require("./journey");

const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(journey => journey.startLocation)
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(journey => journey.endLocation)
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const byTransport = this.journeys.filter((journey) => transport === journey.transport);
  return byTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => minDistance <= journey.distance);
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((n, journey) => {
    return n + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => journey.transport);
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;}
  let unique = result.filter(onlyUnique);
  return unique;
  };


module.exports = Traveller;
