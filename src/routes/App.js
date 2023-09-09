import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginLayout from "../containers/LoginLayout";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import EmailSent from "../pages/EmailSent";
import ChangePassword from "../pages/ChangePassword";
import PasswordChanged from "../pages/PasswordChanged";
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/login"
              element={
                <LoginLayout>
                  <Login></Login>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/recovery-password"
              element={
                <LoginLayout>
                  <RecoveryPassword></RecoveryPassword>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/email-sent"
              element={
                <LoginLayout>
                  <EmailSent></EmailSent>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/recovery"
              element={
                <LoginLayout>
                  <ChangePassword></ChangePassword>
                </LoginLayout>
              }
            />
            <Route
              exact
              path="/password-recovery"
              element={
                <LoginLayout>
                  <PasswordChanged></PasswordChanged>
                </LoginLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
