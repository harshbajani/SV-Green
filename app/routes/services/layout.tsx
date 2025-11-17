// src/routes/services/layout.tsx
import { Outlet } from "react-router";

export default function ServicesLayout() {
  // Put any shared UI for /services here (optional), e.g. a heading or side-nav
  return (
    <div>
      {/* optional shared header */}
      {/* <h1>Our Services</h1> */}
      <Outlet /> {/* <-- children (including index) will render here */}
    </div>
  );
}
