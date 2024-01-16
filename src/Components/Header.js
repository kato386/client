import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    })
      .then((response) => {
        response.json().then((userInfo) => {
          setUsername(userInfo.username);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function logout(event) {
    event.preventDefault();

    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    });
    setUsername(null);
  }
  return (
    <header>
      <Link to="" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
