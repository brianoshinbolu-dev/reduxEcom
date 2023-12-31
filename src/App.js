import { Fragment } from "react";
import { Home, Products, Contact} from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <h1 className="text-center text-danger">Page i no dey yet! </h1>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
