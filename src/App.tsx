import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import "./scss/app.scss";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import { Skeleton } from "./components/GuitarCard/Skeleton";
import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const Guitar = lazy(() => import("./pages/Guitar"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={<Suspense fallback={<div>Loading cart...</div>}></Suspense>}
        />
        <Route
          path="guitar/:id"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Guitar />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
