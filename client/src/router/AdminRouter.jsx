import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth, Blog, Courses, Menu, Newsletter, Users } from "../pages/admin";

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
        <Route
          path="blog"
          element={user ? <Blog /> : <Navigate to="/admin" replace />}
        />
        <Route
          path="courses"
          element={user ? <Courses /> : <Navigate to="/admin" replace />}
        />
        <Route
          path="menu"
          element={user ? <Menu /> : <Navigate to="/admin" replace />}
        />
        <Route
          path="newsletter"
          element={user ? <Newsletter /> : <Navigate to="/admin" replace />}
        />
      </Route>
    </Routes>
  );
}