import Link from "next/link";
import SalesChart from "@/components/SalesChart";
import { getAnalyticsData } from "@/app/actions/analytics";
import { getProducts } from "@/app/actions/product";
import ProductsClient from "@/components/ProductsClient";

export const dynamic = 'force-dynamic';

export default async function DashboardPage({
  searchParams
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const search = params.search || '';

  const [{ products, pagination }, analyticsData] = await Promise.all([
    getProducts(page, 10, search),
    getAnalyticsData(),
  ]);

  return (
    <div className="p-8 bg-gradient-to-b from-slate-950 to-slate-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-white">Product Dashboard</h1>
        <div className="flex gap-2">
          <Link
            href="/dashboard/orders"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition font-semibold shadow-lg"
          >
            View Orders
          </Link>
          <Link
            href="/dashboard/customers"
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition font-semibold shadow-lg"
          >
            View Customers
          </Link>
          <Link
            href="/dashboard/add"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition font-semibold shadow-lg"
          >
            + Add Product
          </Link>
        </div>
      </div>

      {/* Sales Charts */}
      <div className="mb-8">
        <SalesChart data={analyticsData} />
      </div>

      {/* Product Table with Search and Pagination */}
      <ProductsClient
        initialProducts={products}
        pagination={pagination}
        initialSearch={search}
      />
    </div>
  );
}