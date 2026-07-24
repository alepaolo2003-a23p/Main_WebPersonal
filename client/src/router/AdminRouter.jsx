import { Route, Routes } from "react-router-dom";
import { Auth } from "../pages/admin";

export function AdminRouter() {
    return (
        <Routes>
            <Route path="/admin/*" element={<Auth />} />
        </Routes>
    );
}