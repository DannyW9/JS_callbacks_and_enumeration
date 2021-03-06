const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map(function(journey){
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(function(journey){
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const list = this.journeys.filter(function(journey){
    return journey.transport === transport;
  })
  return list;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const list = this.journeys.filter(function(journey){
    return journey.distance > minDistance;
  });
  return list;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce(function(runningTotal, journey){
    return runningTotal + journey.distance;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let modesOfTransport = []

  this.journeys.forEach(function(journey){
    if(modesOfTransport.includes(journey.transport) === false) {
      modesOfTransport.push(journey.transport);
    };
  });
  return modesOfTransport;
};

// let modesOfTransport = this.journeys.filter(function(journey){
//   return (modesOfTransport.includes(journey.transport) === false);
// });
// return modesOfTransport;
// };



module.exports = Traveller;
