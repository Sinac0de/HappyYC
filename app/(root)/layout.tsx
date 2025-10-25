import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </main>
  );
}
