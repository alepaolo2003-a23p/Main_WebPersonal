import { Outlet } from "react-router-dom";

export function AdminLayout() {
    return (
        <div>
            <h1>Se está usando el Admin Layout</h1>
            <Outlet />
        </div>
    );
}