import { Route, Routes } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Blog, Contact, Courses, Home, Post } from "../pages/web/Home";

export function WebRouter() {
    return (
        <Routes>
            <Route path="/" element={<ClientLayout />}>
                <Route index element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:id" element={<Post />} />
            </Route>
        </Routes>
    );
}