"use client";
import Image from "next/image";
import styles from "../styles/login.css";
import { UserContext, SetUserContext } from "./MyContexts";
import { useContext, useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function Login() {
  const supabase = createClient(
    "https://dmyzwmcuzrezoxseqnfh.supabase.co/",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRteXp3bWN1enJlem94c2VxbmZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNTQwNDEsImV4cCI6MjAzMDczMDA0MX0.06Kfzk5wNrKaHSlpo9UNSjGdDDRTJi5nnO1rukULO3E"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState();
  const [userStatus, setUserStatus] = useState("");

  const userState = useContext(UserContext);
  const userDispatch = useContext(SetUserContext);

  function go() {
    setContinueState(true);
  }

  async function fetchAllUsers() {
    let { data: Users, error } = await supabase.from("Users").select("*");

    console.log("USERS", Users);
    console.log("ERROR", error);

    setAllUsers(Users);
    return Users;
  }

  useEffect(() => {
    fetchAllUsers();
  }, [user]);

  async function PostLogin(e) {
    e.preventDefault();

    let bodyContent = JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      address: address,
      zip: zip,
    });

    const { data, error } = await supabase
      .from("Users")
      .insert([
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          phone: phone,
          address: address,
          zip: zip,
        },
      ])
      .select();

    if (data.code === "23505") {
      setUserStatus("Email already taken.");
    } else {
      toggleCreateLogin();

      console.log("brugeren du lige har lavet", data[0]);
      setUser(data[0]);
      userDispatch(data[0]);
      console.log("postLogin success");
      return data;
    }
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("Email ændret");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleZipChange = (event) => {
    setZip(event.target.value);
  };

  const [showCreateLogin, setShowCreateLogin] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggleBothLogins = () => {
    setShowCreateLogin((prevShowCreateLogin) => !prevShowCreateLogin);
    setShowLogin((prevShowLogin) => !prevShowLogin);
    setUserStatus("");
  };

  const toggleCreateLogin = () => {
    setShowCreateLogin((prevShowCreateLogin) => !prevShowCreateLogin);
    setUserStatus("");
  };

  const toggleLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
    setUserStatus("");
  };

  async function loginNow(e) {
    e.preventDefault();
    await fetchAllUsers();
    console.log("XXXXXXXXXXXXXXXXXXXXall users", allUsers);
    const filteredItems = allUsers.filter(
      (item) => item.email === email && item.password === password
    );
    console.log("Hvad fanden");
    console.log(filteredItems);
    if (filteredItems.length === 1) {
      const userLoggedIn = JSON.stringify(filteredItems[0], null, 2);

      const userObject = JSON.parse(userLoggedIn);

      await setUser(userObject);
      await userDispatch(userObject);
      sessionStorage.setItem("userlogin", JSON.stringify(userObject));
      console.log("LoginNow success");
    } else {
      setUserStatus("Email or password is incorrect.");
    }
  }

  async function createLogin(e) {
    e.preventDefault();

    const emailExists = allUsers.some((item) => item.email === email);

    if (emailExists) {
      setUserStatus("Email already taken.");
    } else {
      await PostLogin(e); // Wait for PostLogin to complete

      // Now check if the email is still available after PostLogin
      const filteredItems = allUsers.filter((item) => item.email === email);

      if (filteredItems.length === 0) {
        console.log("createLogin success");
      } else {
        setUserStatus("Email already taken.");
      }
    }
  }

  return (
    <section className="login ">
      <section className="img">
        <div className="loginheader">
          <h1 className={`${myFont.className}`}>Velkommen tilbage</h1>
          <p>
            Login ind på din konto for at får adgang til dit personlige program,
            dit tivolikort og din kontooversigt.
          </p>
        </div>
        <div className="imgoverlay"></div>
      </section>
      <section className="right">
        {!userState && showLogin && (
          <section className="login-container">
            <form className="login-account" onSubmit={loginNow}>
              <h2 className={`${myFont.className} login-headine`}>Log ind</h2>
              {userStatus && <p className="user-status">{userStatus}</p>}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  required
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  onChange={handlePasswordChange}
                />
              </div>
              <label htmlFor="keep">
                <input type="checkbox" id="keep" name="keep" />
                Hold mig logget ind
              </label>
              <input className="primary-button" type="submit" value="Login" />
            </form>

            <div className="flip-login-checkout">
              <p>Har du ikke en konto?</p>
              <button className="secondary-button" onClick={toggleBothLogins}>
                Opret konto
              </button>
            </div>
          </section>
        )}

        {!userState && showCreateLogin && !showLogin && (
          <section className="login-container checkout">
            <form className="create-account" onSubmit={createLogin}>
              <h2 className={`${myFont.className} `}>Opret Konto</h2>
              <div>
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  name="first-name"
                  required
                  onChange={handleFirstNameChange}
                />
              </div>
              <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  name="last-name"
                  required
                  onChange={handleLastNameChange}
                />
              </div>
              {userStatus && <p className="user-status">{userStatus}</p>}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  required
                  onChange={handleEmailChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  minlength="8"
                  maxlength="8"
                  name="phone"
                  required
                  onChange={handlePhoneChange}
                />
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  onChange={handleAddressChange}
                />
              </div>
              <div>
                <label htmlFor="zip">Zip-code</label>
                <input
                  type="text"
                  minlength="4"
                  maxlength="4"
                  name="zip"
                  required
                  onChange={handleZipChange}
                />
              </div>
              <input
                className="primary-button"
                type="submit"
                value="Create Account"
              />
            </form>
            <div className="flip-login">
              <p>Already have an account? </p>
              <button className="secondary-button" onClick={toggleBothLogins}>
                Login
              </button>
            </div>
          </section>
        )}
      </section>
    </section>
  );
}
