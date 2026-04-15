"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

function HeaderPage() {
  const pathname = usePathname(); // ✅ current route

  // ✅ check dynamic route
  const hideHeader = pathname.startsWith("/allcase/:id");
  return (
    <>
      {! hideHeader && <Navbar />}
    </>
  );
}

export default HeaderPage;
