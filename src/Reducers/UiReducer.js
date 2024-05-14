const { createSlice } = require("@reduxjs/toolkit");
const UiReducer = createSlice({
  name: "ui",

  initialState: {
    logindata: null,
    email: null
  },
  reducers: {
    setLoginData(state, action) {
      state.logindata = action.payload;
    },
    setEmailData(state, action) {
        state.email = action.payload;
      },
  },
});

const { actions } = UiReducer;
export const { setLoginData, setEmailData } =
  actions;

export default UiReducer;




// const { createSlice } = require("@reduxjs/toolkit");
// const UiReducer = createSlice({
//   name: "ui",
//   initialState: {
//     id: null,
//   },
//   reducers: {
//     setId(state, action) {
//       state.id = action.payload;
//     },
//   },
// });

// const { actions } = UiReducer;
// export const { setId } = actions;

// export default UiReducer;




