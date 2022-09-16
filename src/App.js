import About from "./pages/About";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Kitch from "./pages/Kitch";
import Cart from "./pages/Cart";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

function App() {
  let [user, setUser] = useLocalStorage("check", false);
  let [getchar, setGetchar] = useLocalStorage("char", "");

  let fncheck = () => {
    setUser(true);
  };
  useEffect(() => {}, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/milano-react"
            element={<Home user={user} getchar={getchar} />}
          />
          <Route
            path="/milano-react/about"
            element={<About user={user} getchar={getchar} />}
          />
          <Route
            path="/milano-react/faq"
            element={<Faq user={user} getchar={getchar} />}
          />
          <Route
            path="/milano-react/login"
            element={
              <Login fncheck={fncheck} user={user} setGetchar={setGetchar} />
            }
          />
          <Route
            path="/milano-react/register"
            element={
              <Register fncheck={fncheck} user={user} setGetchar={setGetchar} />
            }
          />
          <Route
            path="/milano-react/getkitch"
            element={
              user ? (
                <Kitch user={user} getchar={getchar} />
              ) : (
                <Register fncheck={fncheck} tobuy setGetchar={setGetchar} />
              )
            }
          />
          <Route
            path="/milano-react/cart"
            element={<Cart user={user} getchar={getchar} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
