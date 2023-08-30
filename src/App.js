import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing/LandingPage";
import LandingPage2 from "./Pages/Landing/LandingPage2";

import Onboarding from "./Pages/Onboarding/Onboarding";
import SelectLanguage from "./Pages/Onboarding/SelectLanguage";
import VoiceSelection from "./Pages/Onboarding/VoiceSelection";
import Pricing from "./Pages/Onboarding/Pricing";
import Logout from "./Pages/Auth/Logout";
import Success from "./Pages/Onboarding/Success";
//
import GoogleSignup from "./Pages/Auth/GoogleSignup";
import PrivateRoute from "./Pages/Auth/PrivateRoute";

//
import DataState from "./context/DataState";
class App extends Component {
  render() {
    // const dataContext = useContext(DataState);

    return (
      // <LandingPage />
      <DataState>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<LandingPage2 />} />
              <Route path="onboarding" element={<SelectLanguage />} />
              <Route path="/auth" element={<GoogleSignup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/success" element={<Success />} />

              {/* <PrivateRoute
                path="/onboarding/selectlanguage"
                element={<SelectLanguage />}
              /> */}
              <Route
                path="/onboarding/selectlanguage"
                element={
                  <PrivateRoute>
                    <SelectLanguage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/onboarding/voiceselection"
                element={
                  <PrivateRoute>
                    <VoiceSelection />
                  </PrivateRoute>
                }
              />
              <Route
                path="/onboarding/pricing"
                element={
                  <PrivateRoute>
                    <Pricing />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataState>
    );
  }
}

export default App;
