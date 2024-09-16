import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [keyword, setkeyword] = useState("");

  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <>
      <form className="searchbox" onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Seacrh products. . . . ."
          onChange={(e) => setkeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </>
  );
};

export default Search;
