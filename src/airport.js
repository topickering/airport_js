function Airport() {
  this._hangar = [];
  this._weather = '';
};

Airport.prototype.hangar = function() {
  return this._hangar;
};

Airport.prototype.weather = function() {
  this._setWeather();
  return this._weather;
};

Airport.prototype.land = function(plane) {
  if (this._isStormy()) {
    return 'No landing in a storm';
  } else {
    this._hangar.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  if (this._isStormy()) {
    return 'Too stormy to take off';
  } else {
    index = this._hangar.indexOf(plane);
    this._hangar.splice(index, 1);
  }
};

Airport.prototype._setWeather = function () {
  if ((Math.floor(Math.random() * 11)) < 1) {
    this._weather = 'Stormy';
  }
  else {
    this._weather = 'Fine';
  }
};

Airport.prototype._isStormy = function () {
  return this.weather() === 'Stormy';
};
