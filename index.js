// Code your solution in this file!
const distanceFromHqInBlocks = function (pickup) {
  return Math.abs(pickup - 42);
};

const distanceFromHqInFeet = function (pickup) {
  return Math.abs(pickup - 42) * 264;
};

const distanceTravelledInFeet = function (start, destination) {
  return Math.abs(destination - start) * 264;
};

const calculatesFarePrice = function (start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0;
  } else if (distanceTravelledInFeet(start, destination) < 2000) {
    return 0.02 * (distanceTravelledInFeet(start, destination) - 400);
  } else if (distanceTravelledInFeet(start, destination) < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
};
