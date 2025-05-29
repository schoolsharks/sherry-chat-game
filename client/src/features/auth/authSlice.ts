import { createSlice } from '@reduxjs/toolkit';

export enum Roles{
  ADMIN="ADMIN",
  USER="USER"
}

export interface AuthState {
  isAuthenticated: boolean;
  role: Roles | null;
  loading: boolean;
  error: string | null;
}

const initialState = {
  isAuthenticated: false,
  role:null,
  loading:false,
  error:null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.role=null;
    },
    setAuth:(state,action)=>{
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role;
    }
  },
  extraReducers: (builder) => {
    builder
      // .addMatcher(
      //   authApi.endpoints.login.matchFulfilled,
      //   (state, { payload }) => {
      //     state.isAuthenticated = true;
          
      //   }
      // )
      // .addMatcher(
      //   authApi.endpoints.refreshToken.matchFulfilled,
      //   (state, { payload }) => {
      //     localStorage.setItem('token', payload.accessToken);
      //   }
      // );
  },
});

export const { logout ,setAuth} = authSlice.actions;
export default authSlice.reducer;