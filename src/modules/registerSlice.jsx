import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  msg: "",
  user: "",
  token: "",
  loading: false,
  error: "",
};

// export const signUpUser = createAsyncThunk("signupuser", async (body) => {
//   const res = await axios.post("/admin/resources/vdcs	 ", body);
// });

// export const signInUser = createAsyncThunk("signinuser", async (body) => {
//   const res = await axios.post("/admin/resources/vdcs	 ", body);
// });

export const signUpUser = createAsyncThunk("signupuser", async (body) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

export const signInUser = createAsyncThunk("signinuser", async (body) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    addUser: (state, action) => {
      state.user = localStorage.getItem("user");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers: {
    // login
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (state, { error, msg, token, user }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
        state.token = token;
        state.user = user;

        // localStorage.setItem("msg", msg),
        //   localStorage.setItem("user", JSON.stringify(user)),
        //   localStorage.setItem("token", token);
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = true;
    },

    // error
    //   ? (state.error = error)
    //   : state.msg = msg
    //     state.token = token
    //     state.user = user

    //     localStorage.setItem("msg", msg),
    //     localStorage.setItem("user", JSON.stringify(user)),
    //     localStorage.setItem("token", token)

    // signin
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { error, msg }) => {
      state.loading = false;
      error ? (state.error = error) : (state.msg = msg);
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export const { addToken, addUser, logout } = registerSlice.actions;
export default registerSlice.reducer;
