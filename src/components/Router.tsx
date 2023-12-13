import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const Home = lazy(() => import("@/pages/Home"));
const Cards = lazy(() => import("@/pages/Cards"));
const Play = lazy(() => import("@/pages/Play"));

export function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cartas" element={<Cards />} />
          <Route path="/play" element={<Play />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
