sameLongitude = function(city){
  // select the rounded-down longitude from the object
  var long = Math.floor(city.location.longitude),
    seen = [],
    result = [];
  // cursor for iteration
  var cursor = db.cities.find({}).toArray();
  var i = cursor.length;
  // gt or gte?
  while(i--) {
    var _long = Math.floor(cursor[i].location.longitude);
    // if longs match, add to count
    if (long === _long)
    {
      seen[long] = 1;
    }
  }
  var low_long = -180,
    high_long = 180;
  for (var l = low_long; l < high_long; l++) {
    if(seen[l]) {
      result[result.length] = l;
    }
  }
  // number of entries in "seen" array corresponds to duplicate longitudes in collection
  // this is our return
  return result;
}

db.system.js.save({_id: 'sameLongitude', value: sameLongitude})
