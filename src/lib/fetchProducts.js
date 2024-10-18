export async function fetchProducts(page = 1, limit = 10) {
  const res = await fetch(
    `http://localhost:3000/api/getProduct?page=${page}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
