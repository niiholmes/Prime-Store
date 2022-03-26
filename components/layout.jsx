import Footer from "./footer.js";
import Navbar from "./navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-14 ml-5">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;