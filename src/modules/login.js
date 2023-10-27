// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";

// const initialState = {
//   clicked: false,
//   id: {
//     value: "",
//     message: "필수항목",
//   },
//   password: {
//     value: "",
//     message: "필수항목",
//   },
// };

// const getInitialState = () => {
//   return Object.assign({}, initialState);
// };

// const SET_INIT = "login/SET_INIT";
// const SET_VALUE = "login/SET_VALUE";
// const SET_CLICKED = "login/SET_CLICKED";

// export const setInit = createAction(SET_INIT);
// export const setValue = createAction(SET_VALUE);
// export const setClicked = createAction(SET_CLICKED);

// export default handleActions(
//   {
//     [SET_INIT]: (state, action) => {
//       return getInitialState();
//     },
//     [SET_VALUE]: (state, action) => {
//       const { name, value, error } = action.payload;
//       return produce(state, (draft) => {
//         draft[name].value = value;
//         draft[name].message = error.message;
//       });
//     },
//     [SET_CLICKED]: (state, action) => {
//       return produce(state, (draft) => {
//         draft.clicked = true;
//       });
//     },
//   },
//   getInitialState()
// );

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   clicked: false,
//   id: "",
//   password: "",
// };

// const loginSlice = createSlice({
//   name: "login",
//   initialState,
//   reducers: {
//     getId(state, action) {
//       state.id = action.payload.data;
//     },
//   },
// });

// export const { getId } = loginSlice.actions;
// export default loginSlice.reducer;
