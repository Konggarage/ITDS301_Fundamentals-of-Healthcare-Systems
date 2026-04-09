const BASE_URL = "http://localhost:8000/api";

export async function getHospitals() {
  const response = await fetch(`${BASE_URL}/facade/hospitals`);
  return response.json();
}

export async function searchPatient(identifier) {
  const response = await fetch(`${BASE_URL}/facade/search?identifier=${encodeURIComponent(identifier)}`);
  return response.json();
}