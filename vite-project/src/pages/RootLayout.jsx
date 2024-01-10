import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Library from "../components/Library";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-cover bg-black grid grid-cols-12 gap-2 p-2">
      <div className="col-span-12 md:col-span-5 lg:col-span-3 flex flex-col gap-2">
        <NavBar />
        <Library />
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-9 flex flex-col relative">
        <Header />
        <Outlet />
      </div>
      {/* <div className="col-span-12">
        <Footer />
      </div> */}
    </div>
  );
}
