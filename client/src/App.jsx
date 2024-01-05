import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar.jsx";
import './index.css';

export default function App() {
    return (
        <div>
            <Header />
            <div className="body-contain">
            <Sidebar />
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};