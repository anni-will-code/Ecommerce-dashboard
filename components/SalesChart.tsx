"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AnalyticsData {
  totalRevenue: number;
  totalOrders: number;
  avgOrderValue: number;
  totalProducts: number;
  monthlyData: Array<{ month: string; sales: number; orders: number }>;
}

interface SalesChartProps {
  data: AnalyticsData;
}

export default function SalesChart({ data }: SalesChartProps) {
  const { totalRevenue, totalOrders, avgOrderValue, totalProducts, monthlyData } = data;

  // Calculate growth percentages (comparing most recent 2 months with data)
  const getGrowth = (dataKey: 'sales' | 'orders') => {
    if (monthlyData.length < 2) return "0";

    // Find the last two months with actual data
    const monthsWithData = monthlyData.filter(m => m[dataKey] > 0);

    if (monthsWithData.length < 2) return "0";

    const lastMonth = monthsWithData[monthsWithData.length - 1][dataKey];
    const previousMonth = monthsWithData[monthsWithData.length - 2][dataKey];

    return (((lastMonth - previousMonth) / (previousMonth || 1)) * 100).toFixed(1);
  };

  const revenueGrowth = getGrowth('sales');
  const ordersGrowth = getGrowth('orders');

  // Get trend label
  const getTrendLabel = (dataKey: 'sales' | 'orders') => {
    const monthsWithData = monthlyData.filter(m => m[dataKey] > 0);
    if (monthsWithData.length < 2) return "No previous data";

    const lastMonth = monthsWithData[monthsWithData.length - 1].month;
    const prevMonth = monthsWithData[monthsWithData.length - 2].month;

    return `vs ${prevMonth}`;
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-indigo-400">${totalRevenue.toLocaleString()}</p>
          <p className={`text-sm mt-1 ${Number(revenueGrowth) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {Number(revenueGrowth) >= 0 ? '+' : ''}{revenueGrowth}% {getTrendLabel('sales')}
          </p>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-indigo-400">{totalOrders}</p>
          <p className={`text-sm mt-1 ${Number(ordersGrowth) >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {Number(ordersGrowth) >= 0 ? '+' : ''}{ordersGrowth}% {getTrendLabel('orders')}
          </p>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Avg Order Value</h3>
          <p className="text-3xl font-bold text-indigo-400">${avgOrderValue.toFixed(2)}</p>
          <p className="text-sm text-slate-300 mt-1">Per order</p>
        </div>
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-400">{totalProducts}</p>
          <p className="text-sm text-slate-300 mt-1">In inventory</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Line Chart */}
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Sales Overview (Last 6 Months)</h3>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip 
                  formatter={(value: any) => [`$${value}`, 'Revenue']}
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #818cf8',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                <Line type="monotone" dataKey="sales" stroke="#818cf8" strokeWidth={2} name="Revenue" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-slate-400">
              No sales data available
            </div>
          )}
        </div>

        {/* Orders Bar Chart */}
        <div className="bg-slate-800/80 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-lg font-semibold mb-4 text-white">Orders by Month</h3>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip 
                  formatter={(value: any) => [value, 'Orders']}
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: '1px solid #10b981',
                    borderRadius: '8px',
                    color: '#f1f5f9'
                  }}
                />
                <Legend wrapperStyle={{ color: '#cbd5e1' }} />
                <Bar dataKey="orders" fill="#10b981" name="Orders" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-slate-400">
              No order data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
