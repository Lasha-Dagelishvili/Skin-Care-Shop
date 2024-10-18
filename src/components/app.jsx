import Pagination from "./Pagination";
import { fetchProducts } from "@/lib/fetchProducts";

export default async function App({ searchParams }) {
  const page = searchParams?.page || 1;
  const initialData = await fetchProducts(page);
  const totalPages = initialData.totalPages || 1;

  return (
    <>
      <div className="pb-24 pt-16 bg-gray-300 select-none">
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Our Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5 lg:px-28">
          {initialData.products ? (
            initialData.products.map((product) => (
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
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
      <Pagination totalPages={totalPages} currentPage={page} />
    </>
  );
}
