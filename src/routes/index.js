import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "../views/chat";
import Rooms from "../views/rooms";
import People from "../views/people";
import Layout from "../layout";
import { setOpenProfile } from "../store/slices/dataSlice";
import { useDispatch } from "react-redux";

const routes = [
  { path: "/chats", element: <Chat /> },
  { path: "/rooms", element: <Rooms /> },
  { path: "/people", element: <People /> },
];

const AppRoutes = () => {
  const dispatch = useDispatch();
  const [isSmallScreen, setIsSmallScreen] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen === true) {
      dispatch(setOpenProfile(false));
    } else if (isSmallScreen === false) {
      dispatch(setOpenProfile(true));
    }
  }, [isSmallScreen, dispatch]);
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
