import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { AuthorizationStatus } from '../../constants';
import { UserData } from '../../types/user-data';
import { getUserDataAction, loginAction, logoutAction } from '../api-actions';

type AuthSliceTypes = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  loginError: string | null;
}

const initialState: AuthSliceTypes = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  loginError: null,
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginError = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserDataAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
      })
      .addCase(getUserDataAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userData = action.payload;
        state.loginError = null;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginError = 'error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
        state.loginError = null;
      });
  },
});


export const { clearLoginError } = authSlice.actions;
