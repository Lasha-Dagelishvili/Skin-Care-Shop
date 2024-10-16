import Pagination from "./Pagination";

export async function fetchProducts(page = 1, limit = 10) {
  const res = await fetch(
    `http://localhost:3000/api/getProduct?page=${page}&limit=${limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductsPage() {
  const initialData = await fetchProducts(1);

  const onPageChange = async (newPage) => {
    const data = await fetchProducts(newPage);
  };

  return (
    <>
      <div className="pb-24 pt-16 bg-gray-300 select-none">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Our Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-28">
          {initialData.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.productName}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl text-gray-800 font-semibold">
                {product.productName}
              </h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        totalPages={initialData.totalPages}
        currentPage={initialData.currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
}
