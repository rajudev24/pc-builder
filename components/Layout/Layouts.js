import { SessionProvider } from "next-auth/react";
import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";

export default function Layouts({ children }) {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </SessionProvider>
  );
}
