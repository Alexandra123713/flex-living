import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Nav";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
