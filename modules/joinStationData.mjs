export function joinStationData(stationInformation, stationStatus) {
  // Ignore the metadata
  stationInformation = stationInformation['data']['stations']
  stationStatus = stationStatus['data']['stations']

  let stations = [];
  // Assume stationInformation and stationStatus are sorted
  // by station_id and contain the same stations.
  for (let i = 0; i < stationInformation.length; i++) {
    let station = {
      name: stationInformation[i].name,
      lat: stationInformation[i].lat,
      lon: stationInformation[i].lon,
      docks: stationStatus[i].num_docks_available,
      bikes: stationStatus[i].num_bikes_available,
    }
    stations.push(station);
  }
  return stations;
}
