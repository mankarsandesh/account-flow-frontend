
import { BrowserRouter, Routes as RoutesN, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Landing from "./pages/Landing"
import AccountFile from "./pages/AccountFile"
export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesN>
        {/* Route for the root path */}
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<LoginPage />} />

        {/* Route for the /home path */}
        <Route path="/home" element={<Home />} />

        {/* Route for the /home path */}
        <Route path="/account-file" element={<AccountFile />} />

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<NotFoundPage />} />
      </RoutesN>
    </BrowserRouter>
  );
};
