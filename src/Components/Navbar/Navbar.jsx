import React, { useContext, useEffect, useState } from "react";

import { Link, json } from "react-router-dom";
import logo from "../../Assets/images/freshcart-logo.svg";
import { UserContext } from "../../Context/Usercontext";
import { CartContext } from "../../Context/cartcontext";
import { useSelector } from "react-redux";
import { date } from "yup";

export default function Navbar() {
  const [shop, setshop] = useState([]);
  const [infor, setinfor] = useState([]);
  let { usercontext, setusercontext } = useContext(UserContext);
  let { getddtocart ,xd } = useContext(CartContext);
  console.log(xd.numOfCartItems);
  async function getcertdta() {
    let { data } = await getddtocart();
    setinfor(data?data:"");
     localStorage.setItem('n',JSON.stringify(infor.data?.products.length))
  }
  useEffect(() => {
    getcertdta();
  }, []);


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="fresh cart logo" />
          </Link>
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
              {usercontext !== null ? (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/products">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                      Categories
                    </Link>
                  </li>
                
                  <li className="nav-item">
                    <Link className="nav-link" to="/brands">
                      Brands<sub>{shop}</sub>
                    </Link>
                  </li>
                  <li className="nav-item text-end">
        
              </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/Profile">
                      Profile
                    </Link>
                  </li> */}
                </>
              ) : (
                ""
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {usercontext !== null &&    <li className="nav-item d-flex align-items-center">
                {/* <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-tiktok"></i> */}
                      <div className="d-flex justify-content-start ">
              <Link className="nav-link" to="/cart">
                  <i
                    className="fa-solid fa-cart-shopping"
                    style={{ color: "#0aad0a" }}
                  ></i>
                  <sup  className=" sup border rounded-circle sup bg-main  mb-3 fs-8  p-1 text-white">{xd.numOfCartItems}</sup>
                </Link>
              </div>
              </li>}
          

              {usercontext !== null ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={(e) => {
                      setusercontext(null);
                      localStorage.removeItem("usetocken");
                    }}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
