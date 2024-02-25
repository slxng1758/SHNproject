import GoogleTranslate from "../../hooks/googleTranslateHook.js";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#013F8A" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="https://www.shn.ca/">
                SHN Website
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.shnfoundation.ca/">
                SHN Foundation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.shn.ca/newsroom/">
                SHN Newsroom
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Language
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    French
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Chinese
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Punjabi
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div id="google_translate_element"></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
