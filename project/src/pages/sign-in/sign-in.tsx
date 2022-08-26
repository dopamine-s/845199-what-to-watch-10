import Logo from '../../components/logo/logo';
import { useRef, useState, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { loginAction } from '../../store/api-actions';
import { AuthorizationData } from '../../types/auth-data';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { isEmailValid, isPasswordValid } from '../../utils/utils';
import { selectAuthorizationStatus, selectLoginError } from '../../store/auth-slice/select';

export default function SignIn(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [emailValidationStatus, setEmailStatus] = useState(true);
  const [passwordValidationStatus, setPasswordStatus] = useState(true);

  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const loginError = useAppSelector(selectLoginError);

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const login = loginRef.current.value;
      const password = passwordRef.current.value;

      if (!isPasswordValid(passwordRef.current.value)) {
        setPasswordStatus(false);

      } else if (isPasswordValid(passwordRef.current.value)) {
        setPasswordStatus(true);
      }

      if (!isEmailValid(loginRef.current.value)) {
        setEmailStatus(false);

      } else if (isEmailValid(loginRef.current.value)) {
        setEmailStatus(true);
      }

      if (isPasswordValid(passwordRef.current.value) && isEmailValid(loginRef.current.value)) {
        dispatch(loginAction(({
          login,
          password,
        }) as AuthorizationData));
      }
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo light={false} />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          onSubmit={submitHandler}
        >
          <div className="sign-in__message">
            {loginError || !passwordValidationStatus ?
              (
                <p>We can&apos;t recognize this email<br></br> and password combination. Please try again.</p>
              ) : (
                !emailValidationStatus &&
                <p>Please enter a valid email address</p>
              )}
          </div>
          <div className="sign-in__fields">
            <div className={`sign-in__field ${!emailValidationStatus ? 'sign-in__field--error' : ''}`}>
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-email"
              >
                Email address
              </label>
            </div>
            <div className={`sign-in__field ${!passwordValidationStatus ? 'sign-in__field--error' : ''}`}>
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label
                className="sign-in__label visually-hidden"
                htmlFor="user-password"
              >
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo light />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
