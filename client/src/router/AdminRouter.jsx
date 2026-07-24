import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, Users } from "../pages/admin";

export function AdminRouter() {
  const user = localStorage.getItem("usuario");

  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Auth />} />
        <Route
          path="users"
          element={user ? <Users /> : <Navigate to="/admin" replace />}
        />
      </Route>
    </Routes>
  );
}