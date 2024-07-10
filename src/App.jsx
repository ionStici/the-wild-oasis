import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import DarkModeProvider from "./contexts/DarkModeContext";

import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
