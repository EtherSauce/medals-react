
// Use your deployed Azure API for both development and production
const AZURE_API = 'https://medals-react.azurewebsites.net/api';
const BASE = AZURE_API;

// ---- Countries ----
export async function getCountries() {
  const res = await fetch(`${BASE}/country`, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`GET /country failed: ${res.status} ${res.statusText} ${body}`);
  }
  return res.json();
}

export async function createCountry({ name }) {
  const res = await fetch(`${BASE}/country`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`POST /country failed: ${res.status} ${res.statusText} ${body}`);
  }
  return res.json();
}

export async function deleteCountry(id) {
  const res = await fetch(`${BASE}/country/${id}`, { method: 'DELETE' });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`DELETE /country/${id} failed: ${res.status} ${res.statusText} ${body}`);
  }
  return true;
}

// NOTE: Per assignment, DO NOT persist medal increments/decrements yet.
// Handle medal +/- in React state only; do not call the API for those.
