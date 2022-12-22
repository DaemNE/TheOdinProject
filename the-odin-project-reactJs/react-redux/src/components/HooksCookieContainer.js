import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux";

function HooksCookieContainer() {
  const numOfCookies = useSelector((state) => state.cookie.numOfCookies);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Num of cakes - {numOfCookies}</h2>
      <button onClick={() => dispatch(buyCookie())}>buy Cookie</button>
    </div>
  );
}

export default HooksCookieContainer;
