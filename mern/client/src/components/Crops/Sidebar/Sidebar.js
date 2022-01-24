import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div id="main">
        <div className="flex-shrink-0 p-3 aaa">
          <h5 className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
            <svg className="bi me-2" width="30" height="24">
              <use href="#bootstrap" />
            </svg>
            <span className="fs-5 fw-semibold">Kissan Dost</span>
          </h5>
          <h6>CROPS</h6>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed  "
                data-bs-toggle="collapse"
                data-bs-target="#home-collapsee"
                aria-expanded="true"
              >
                CERALS
              </button>
              <div className="collapse show " id="home-collapsee">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/barely" className="link-dark rounded">
                      - BARLEY
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/maizekharif" className="link-dark rounded">
                      - MAIZE (Kharif)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/maizerabi" className="link-dark rounded">
                      - MAIZE (Rabi)
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/oats" className="link-dark rounded">
                      - OATS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pearlmillet" className="link-dark rounded">
                      - PEARL MILLET
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rice" className="link-dark rounded">
                      - RICE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/wheat" className="link-dark rounded">
                      - WHEAT (Kanak/Gehu)
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-haspopup="true"
                aria-expanded="false"
              >
                FIBER CROPS
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/cotton" className="link-dark rounded">
                      - COTTON
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-haspopup="true"
                aria-expanded="false"
              >
                SUGARCANE AND STARCH
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <NavLink to="/sugarcane" className="link-dark rounded">
                    - SUGARCANE
                  </NavLink>
                </ul>
              </div>
            </li>
          </ul>

          <h6>HORTICULTURE</h6>
          <ul className="list-unstyled ps-0">
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#home-collapse"
                aria-expanded="true"
              >
                FLOWERS
              </button>
              <div className="collapse show" id="home-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/carnation" className="link-dark rounded">
                      - CARNATION
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/chrysanthemum" className="link-dark rounded">
                      - CHRYSANTHEMUM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gerbera" className="link-dark rounded">
                      - GERBERA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gladiolus" className="link-dark rounded">
                      - GLADIOLUS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/jasmine" className="link-dark rounded">
                      - JASMINE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/marigold" className="link-dark rounded">
                      - MARIGOLD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rose" className="link-dark rounded">
                      - ROSE
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tuberose" className="link-dark rounded">
                      - TUBEROSE (RAJNIGANDHA)
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#dashboard-collapse"
                aria-haspopup="true"
                aria-expanded="false"
              >
                CITRUS
              </button>
              <div className="collapse" id="dashboard-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <li>
                    <NavLink to="/lemon" className="link-dark rounded">
                      - LEMON
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lime" className="link-dark rounded">
                      - LIME (Nibbo)
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="mb-1">
              <button
                className="btn btn-toggle align-items-center rounded collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#orders-collapse"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PLANTATION CROPS
              </button>
              <div className="collapse" id="orders-collapse">
                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                  <NavLink to="/fig" className="link-dark rounded">
                    - FIG
                  </NavLink>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
