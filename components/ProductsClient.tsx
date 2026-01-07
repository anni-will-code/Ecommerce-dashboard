'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import DeleteButton from './DeleteButton';

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}

interface Pagination {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasMore: boolean;
}

interface ProductsClientProps {
  initialProducts: Product[];
  pagination: Pagination;
  initialSearch: string;
}

export default function ProductsClient({
  initialProducts,
  pagination,
  initialSearch
}: ProductsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set('search', searchTerm);
    } else {
      params.delete('search');
    }
    params.set('page', '1');
    router.push(`/dashboard?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/dashboard?${params.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search products by name, category, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 border border-slate-600 bg-slate-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition font-semibold"
          >
            Search
          </button>
          {initialSearch && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                router.push('/dashboard');
              }}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition"
            >
              Clear
            </button>
          )}
        </div>
      </form>

      <div className="bg-slate-800/80 border border-slate-700 rounded-lg overflow-hidden shadow-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900/90 border-b border-slate-700">
            <tr>
              <th className="p-4 text-white font-bold">Name</th>
              <th className="p-4 text-white font-bold">Price</th>
              <th className="p-4 text-white font-bold">Stock</th>
              <th className="p-4 text-white font-bold">Category</th>
              <th className="p-4 text-white font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {initialProducts.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-4 text-center text-slate-200">
                  No products found.
                </td>
              </tr>
            ) : (
              initialProducts.map((product: any) => (
                <tr key={product._id} className="border-b border-slate-700 bg-slate-800/60 hover:bg-slate-700/70 transition">
                  <td className="p-4 font-bold text-white">{product.name}</td>
                  <td className="p-4 font-semibold text-white">${product.price}</td>
                  <td className="p-4 font-semibold text-white">{product.stock}</td>
                  <td className="p-4 font-semibold text-white">{product.category}</td>
                  <td className="p-4 space-x-2">
                    <Link
                      href={`/dashboard/edit/${product._id}`}
                      className="text-indigo-400 hover:text-indigo-300 font-medium transition"
                    >
                      Edit
                    </Link>
                    <DeleteButton productId={product._id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {pagination.totalPages > 1 && (
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-slate-100 font-medium">
            Showing page {pagination.currentPage} of {pagination.totalPages} (
            {pagination.totalProducts} total products)
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="px-4 py-2 border border-slate-600 bg-slate-800 text-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition"
            >
              Previous
            </button>
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === pagination.totalPages ||
                  Math.abs(page - pagination.currentPage) <= 1
              )
              .map((page, index, array) => (
                <div key={page} className="flex items-center gap-2">
                  {index > 0 && array[index - 1] !== page - 1 && (
                    <span className="text-slate-500">...</span>
                  )}
                  <button
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg transition ${
                      page === pagination.currentPage
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white font-semibold'
                        : 'border border-slate-600 bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                </div>
              ))}
            <button
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.totalPages}
              className="px-4 py-2 border border-slate-600 bg-slate-800 text-slate-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
