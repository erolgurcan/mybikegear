import { useState, useEffect, useRef } from "react";
import "./Register.css";


const Register = () => {
  console.log(process.env);

  const form = useRef();
  const [isAuth, setIsAuth] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [validInfo, setValidInfo] = useState(true);

  const modalShownHandler = () => {
    setModalShow(false);
  };


  return (
    <>
      <section className="vh-100 register-background col-xs-12 w-100 p-4 ">
        <div className="h-100 col-lg-6 m-auto col-sm-12">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="col-md-2 col-lg-7 d-flex align-items-center m-auto">
                  <div className="card-body text-black">
                    <form ref={form}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h1 fw-bold m-auto">
                          <img
                            className="img-fluid"
                            src={require("../assets/img/slide/logo.png")}
                            alt="..."
                          />
                        </span>
                      </div>
                      <div className="d-flex flex-column justify-content-center flex-wrap">
                        {" "}
                        <h4 className="text-center">
                          Become a Member?
                        </h4>
                        <h5 className="text-center">
                          Then fill out the form below...
                        </h5>{" "}
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                          placeholder="Name"
                          name="user_name"
                        />
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Surname</label>
                        <input
                          type="text"
                          id="surname"
                          className="form-control form-control-lg"
                          placeholder="Surname"
                          name="user_lastname"
                        />
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Email address</label>
                        <input
                          type="email"
                          id="emailLogin"
                          className="form-control form-control-lg"
                          placeholder="some@some.com"
                          name="user-email"
                        />
                      </div>

                      <div className="form-outline ">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          id="phoneNumber"
                          className="form-control form-control-lg"
                          placeholder="xxx-xxx-xx-xx"
                          name="user_phonenumber"
                        />
                      </div>
                      {!validInfo && (
                        <h4 style={{ color: "red", textAlign: "center" }}>
                          Missing Fields
                        </h4>
                      )}
                      <div className="m-2 text-center ">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
