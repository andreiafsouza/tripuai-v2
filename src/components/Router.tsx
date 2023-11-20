import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "@/layouts/DefaultLayout";

const Home = lazy(() => import("@/pages/Home"));

export function Router() {
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
