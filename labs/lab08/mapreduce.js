/* Map, Reduce Functions and Mongo query for Lab08 */

// The longitude of the city (and I spose the city's name) are the only
// relevant fields
map = function() {
  // emit this and the name of the city
  emit(
    //  Key
    {
    longitude: Math.floor(this.location.longitude)
  },
    //  Value
    {
    count : 1
  });
}

reduce = function(key, values) {
  var total = 0;
  for (var i = values[0]; i < values.length; i++) {
        total += values[i].count;
  }
  return { count : total };
}

results = db.runCommand({
  mapReduce : 'cities',
  map : map,
  reduce : reduce,
  out : 'cities.report'
  }
)



