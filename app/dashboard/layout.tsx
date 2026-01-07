import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {children}
      </div>
    </Providers>
  );
}
