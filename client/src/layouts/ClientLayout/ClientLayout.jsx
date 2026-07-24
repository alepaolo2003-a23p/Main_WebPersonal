import { Outlet } from "react-router-dom";

export function ClientLayout() {
    return (
        <div>
            <h1>Está cargando el Client Layout</h1>
            <Outlet />
        </div>
    );
}