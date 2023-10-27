// import React, { useCallback, useEffect } from "react";
// import { useSelector, useDispatch, useSelector } from "react-redux";
// import Login from "../components/Login/Login";
// import { useDispatch } from "react-rdux";
// import { signInUser } from "../modules/registerSlice";
// // import { setInit, setValue, setClicked } from "../modules/login";

// const LoginFormContainer = () => {
//   const () = useSelector((state) => state.login, []);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     return () => {
//       dispatch(setInit());
//     };
//   }, [dispatch]);

//   const onchange = useCallback((e) => {
//     let { name, value } = e.target;
//     value = name === "id" ? value.toLowerCase() : value;
//     e.target.value = value;
//   }, []);

//   const onclick = useCallback((id, password) => (e) => {
//     e.prevemtDefault();
//   });

//   // const onKeyDown = useCallback((id, password) => (e) => {});
// };
// return (
//   <Login
//     clicked={clicked}
//     id={id}
//     password={password}
//     onchange={onchange}
//     onKeyDown={onKeyDown}
//     onclick={onclick}
//   />
// );

// export default LoginFormContainer;
