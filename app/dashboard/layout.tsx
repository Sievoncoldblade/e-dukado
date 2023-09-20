import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-white dark:bg-gray-900 relative'>
      <Sidebar />
      {children}
    </div>
  );
}
