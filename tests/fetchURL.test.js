import test from 'tape';

import fetchMock from 'fetch-mock';

import { fetchJSON } from '../modules/fetchJSON.mjs';


test('fetchJSON: happy path', async (t) => {
  const samplePayload = { 'some': 'json' };

  fetchMock.get('*', samplePayload);
  const json = await fetchJSON('http://any.url/endpoint.json');

  t.deepEqual(json, samplePayload,
    'Returns data from server as object parsed from JSON.');

  fetchMock.reset();
  t.end();
});
