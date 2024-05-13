// src/components/AllRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Cart from "../Pages/Cart";
import Signup from "../Pages/Signup";
import Products from "../Pages/Products";
import MobilePage from "../Pages/MobilePage";
import ComputerPage from "../Pages/ComputerPage";
import AcPage from "../Pages/AcPage";
import Fridges from "../Pages/Fridges";
import KitchenPage from "../Pages/KitchenPage";
import MenPage from "../Pages/MenPage";
import SpeakerPage from "../Pages/SpeakerPage";
import TvPage from "../Pages/TvPage";
import WatchesPage from "../Pages/WatchesPage";
import WomenPage from "../Pages/WomenPage";
import AcSinglePage from "../Pages/SingleProductPages/ACSinglePage";
import ComputerSinglePage from "../Pages/SingleProductPages/ComputerSinglePage";
import MobileSinglePage from "../Pages/SingleProductPages/MobileSinglePage";
import TvSinglePage from "../Pages/SingleProductPages/TvSinglePage";
import WatchSinglePage from "../Pages/SingleProductPages/WatchSinglePage";
import SpeakerSinglePage from "../Pages/SingleProductPages/SpeakerSinglePage";
import PrivateRoute from "../Routes/PrivateRoute";
import PaymentPage from "../Pages/PaymentPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route path="/mobile" element={   <PrivateRoute><MobilePage /></PrivateRoute>} />
      <Route path="/mobile/:id" element={ <PrivateRoute><MobileSinglePage /></PrivateRoute>} />
      <Route path="/computer" element={<ComputerPage />} />
      <Route path="/computer/:id" element={<ComputerSinglePage />} />
      <Route path="/ac" element={<AcPage />} />
      <Route path="/ac/:id" element={<AcSinglePage />} />
      <Route path="/fridge" element={<Fridges />} />
      <Route path="/kitchen" element={<KitchenPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/speaker" element={<SpeakerPage />} />
      <Route path="/speaker/:id" element={<SpeakerSinglePage />} />
      <Route path="/tv" element={<TvPage />} />
      <Route path="/tv/:id" element={<TvSinglePage />} />
      <Route path="/watches" element={<WatchesPage />} />
      <Route path="/watches/:id" element={<WatchSinglePage />} />
      <Route path="/women" element={<WomenPage />} />
      <Route  path='/payment'  element={<PaymentPage/>}/>
      <Route path="/*" element={<> You are Lost </>} />
    </Routes>
  );
}

export default AllRoutes;
