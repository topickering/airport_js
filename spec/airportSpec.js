describe('Airport', function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = 'plane'
  })

  describe('Can instruct a plane to land', function() {
    it('and it does when the weather is fine', function() {
      spyOn(airport, '_isStormy').and.returnValue(false)
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });

    it('and it will not if it is stormy', function() {
      spyOn(airport, '_isStormy').and.returnValue(true)
      expect(airport.land(plane)).toEqual('No landing in a storm');
    });
  });

  describe('Can instruct a plane to take off', function() {
    it('and it does if it is fine', function() {
      spyOn(airport, '_isStormy').and.returnValue(false)
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });
    it('and it will not if it is stormy', function() {
      spyOn(airport, '_isStormy').and.returnValue(true)
      expect(airport.takeOff(plane)).toEqual('Too stormy to take off')
    });
  });

});
