import test from 'tape';

import { joinStationData } from '../modules/joinStationData.mjs';


const sampleStationInformation = {
  "last_updated": 1553592653,
  "data": {
    "stations": [
      {  
        "station_id":"627",
        "name":"Skøyen Stasjon",
        "address":"Skøyen Stasjon",
        "lat":59.9226729,
        "lon":10.6788129,
        "capacity":20
      },
      {  
        "station_id":"623",
        "name":"7 Juni Plassen",
        "address":"7 Juni Plassen",
        "lat":59.9150596,
        "lon":10.7312715,
        "capacity":15
      },
      {  
        "station_id":"610",
        "name":"Sotahjørnet",
        "address":"Sotahjørnet",
        "lat":59.9099822,
        "lon":10.7914482,
        "capacity":20
      }
    ]
  }
};

const sampleStationStatus = {
  "last_updated": 1540219230,
  "data": {
    "stations": [
      {
        "is_installed": 1,
        "is_renting": 1,
        "num_bikes_available": 7,
        "num_docks_available": 5,
        "last_reported": 1540219230,
        "is_returning": 1,
        "station_id": "627"
      },
      {
        "is_installed": 1,
        "is_renting": 1,
        "num_bikes_available": 4,
        "num_docks_available": 8,
        "last_reported": 1540219230,
        "is_returning": 1,
        "station_id": "623"
      },
      {
        "is_installed": 1,
        "is_renting": 1,
        "num_bikes_available": 4,
        "num_docks_available": 9,
        "last_reported": 1540219230,
        "is_returning": 1,
        "station_id": "610"
      }
    ]
  }
};

const expectedResult = [
  {
    "name": "Skøyen Stasjon",
    "lat": 59.9226729,
    "lon": 10.6788129,
    "docks": 5,
    "bikes": 7,
  },
  {
    "name": "7 Juni Plassen",
    "lat": 59.9150596,
    "lon": 10.7312715,
    "docks": 8,
    "bikes": 4,
  },
  {
    "name": "Sotahjørnet",
    "lat": 59.9099822,
    "lon": 10.7914482,
    "docks": 9,
    "bikes": 4,
  },
]

test('joinStationData', (t) => {
  const result = joinStationData(sampleStationInformation, sampleStationStatus);
  t.deepEqual(result, expectedResult);
  t.end();
});
