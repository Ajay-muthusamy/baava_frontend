import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nabar from "./component/navbar/Nabar";
import Shopping from "./component/shopping/Shopping";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Home from "./component/home/Home";
import Contact from "./component/contact/Contact";
import Cart from "./component/shopping/cart/Cart";
import Payment from "./component/shopping/payment/Payment";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Nabar />}>
            <Route path="/" element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="quick-shopping" element={<Shopping />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="payment" element={<Payment/>}/>
          </Route>
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
