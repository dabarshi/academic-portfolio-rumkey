import { Outlet } from "react-router-dom";
import Header from "../section/Header";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
