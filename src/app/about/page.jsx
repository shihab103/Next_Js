"use client"
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div>
      <h1>About Page</h1>
      <button type="button" onClick={handleNavigation}>
        Address Page
      </button>
    </div>
  );
};

export default AboutPage;
