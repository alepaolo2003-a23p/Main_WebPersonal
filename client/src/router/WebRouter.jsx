import { Route, Routes } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Home } from "../pages/web/Home";

export function WebRouter() {
    return (
        <Routes>
            <Route path="/" element={<ClientLayout />}>
                <Route path="/" element={<Home />} />   
            </Route>
        </Routes>
    );
}