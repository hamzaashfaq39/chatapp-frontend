import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "../views/chat";
import Rooms from "../views/rooms";
import People from "../views/people";
import Layout from "../layout";

const routes = [
  { path: "/chats", element: <Chat /> },
  { path: "/rooms", element: <Rooms /> },
  { path: "/people", element: <People /> },
];

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/chats" />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
