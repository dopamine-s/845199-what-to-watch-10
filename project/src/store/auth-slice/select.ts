import { State } from '../../types/state';
import { SliceName } from '../../constants';

export const selectAuthorizationStatus = (state: State) => state[SliceName.Auth].authorizationStatus;

export const selectUserData = (state: State) => state[SliceName.Auth].userData;

export const selectLoginError = (state: State) => state[SliceName.Auth].loginError;
