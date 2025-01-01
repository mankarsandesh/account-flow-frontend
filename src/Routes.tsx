
import { BrowserRouter, Routes as RoutesN, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import Home from "./pages/Home";
import Landing from "./pages/Landing"
import AccountFile from "./pages/AccountFile"
import Category from "./pages/Category";

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesN>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/home" element={<Home />} />

        <Route path="/upload-statement" element={<AccountFile />} />

         <Route path="/category" element={<Category />} />

        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<NotFoundPage />} />
      </RoutesN>
    </BrowserRouter>
  );
};
