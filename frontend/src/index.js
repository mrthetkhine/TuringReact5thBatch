import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root,{
    loader as rootLoader,
    action as rootAction,
} from "./routes/Root";
import ErrorPage from "./pages/ErrorPage";
import Contact, {
    loader as contactLoader,
    action as contactAction,
} from "./routes/Contact";
import EditContact,{
    action as editAction,
} from "./routes/Edit";
import { action as destroyAction } from "./routes/Destroy";
import Index from "./routes/Index";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <Index />
            },
            {
                path: "contacts/:contactId",
                loader: contactLoader,
                action: contactAction,
                element: <Contact />,
            },
            {
                path: "contacts/:contactId/edit",
                element: <EditContact />,
                loader: contactLoader,
                action:editAction,
            },
            {
                path: "contacts/:contactId/destroy",
                action:destroyAction,
                errorElement: <div>Something went wrong</div>,
            },
        ],
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} >
          {/*<App />*/}
      </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
