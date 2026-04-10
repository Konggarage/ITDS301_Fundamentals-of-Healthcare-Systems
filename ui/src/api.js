const BASE_URL = "http://localhost:8000/api";

export async function searchPatient(identifier) {
  const response = await fetch(
    `${BASE_URL}/facade/search?identifier=${encodeURIComponent(identifier)}`
  );

  const data = await response.json();
  return data;
}