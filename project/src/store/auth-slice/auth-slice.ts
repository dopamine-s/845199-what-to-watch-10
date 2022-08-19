import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../constants';
import { AuthorizationStatus } from '../../constants';
import { UserData } from '../../types/user-data';
import { getUserDataAction, loginAction, logoutAction } from '../api-actions';

type AuthSliceTypes = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  loginError: string;
}

const initialState: AuthSliceTypes = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  loginError: '',
};

export const authSlice = createSlice({
  name: SliceName.Auth,
  initialState,
  reducers: {
    clearLoginError: (state) => {
      state.loginError = '';
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
        state.loginError = '';
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.loginError = 'error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = null;
        state.loginError = '';
      });
  },
});


export const { clearLoginError } = authSlice.actions;
