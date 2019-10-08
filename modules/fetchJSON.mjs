// When calling this function, be sure to catch errors.
// They include local network failure and server errors.
export async function fetchJSON(url) {
  // fetch may throw TypeError on network failure.
  const resp = await fetch(url);
  if (!resp.ok)
    throw Error(`${resp.status} ${resp.statusText}`);
  return resp.json();
}
