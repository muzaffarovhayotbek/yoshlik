import { Routes, Route, NavLink } from "react-router-dom";
import Story from "./pages/Story/Story";
import me from "./images/me.jpg";
import Images from "./pages/Images/Images";
import "./App.css";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <div className="header-logo">
            <h1>Yoshlik</h1>
          </div>
          <div className="header-nav">
            <ul className="header-ul">
              <li>
                <NavLink to="/home  ">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Story">Hikoyalar</NavLink>
              </li>
              <li>
                <NavLink to="/Images">Suratlar</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main className="main">
              <div className="container ul">
                <div className="main-ul">
                  <h2>Yoshlik bu eng yorqin davr</h2>
                  <p>Yoshlik- shodlik, orzular, beg'ubor davr</p>
                  <button>Koproq bilish</button>
                </div>
                <div className="main_img">
                  <img src={me} alt="me" />
                </div>
              </div>
            </main>
          }
        />
        <Route path="/Story" element={<Story></Story>} />
        <Route path="/Images" element={<Images></Images>} />
        <Route path="/Home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
