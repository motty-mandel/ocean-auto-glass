import  ReactDOM  from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Static from './pages/Static';
import App from './App';
import Tasks from './pages/Tasks';
import Notification from './pages/Notification';
import PNL from './pages/PNL';
import Inventory from './pages/Inventory';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            {
                index: true,
                element: <Static/>
            },
            {
                path: '/tasks',
                element: <Tasks />
            },
            {
                path: '/notifications',
                element: <Notification />
            },
            {
                path: '/part-number-lookup',
                element: <PNL />
            },
            {
                path: '/inventory',
                element: <Inventory />
            },
            {
                path: '/something-else',
                element: <h1>Something Else</h1>
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);