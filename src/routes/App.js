//librerias
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layouts
import LoginLayout from "../containers/LoginLayout";
import AppLayout from "../containers/AppLayout";
import Layout from "../containers/Layout";
//Contextos
import Appcontext from "../context/AppContext";
//compoonentes
import Login from "../pages/Login";
import RecoveryPassword from "../pages/RecoveryPassword";
import EmailSent from "../pages/EmailSent";
import ChangePassword from "../pages/ChangePassword";
import Users from "../pages/Users";
import PasswordChanged from "../pages/PasswordChanged";
//hooks
import useInitialState from "../hooks/useInitialState";

//schemas
import {
  schema as userSchema,
  defaultValues as userDefault,
} from "../schemas/yup/User.yup";
import IntoContext from "../context/IntoContext";
function App() {
  const initialState = useInitialState();

  return (
    <Appcontext.Provider value={initialState}>
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
            <Route
              exact
              path="/users"
              element={
                <AppLayout
                  tabla="users"
                  defaultValues={userDefault}
                  schema={userSchema}
                  pageLimit={5}
                  vDateSearch={"vDateSearch"}
                  searchTopics={["name"]}
                >
                  <Users></Users>
                </AppLayout>
              }
            />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Appcontext.Provider>
  );
}

export default App;
