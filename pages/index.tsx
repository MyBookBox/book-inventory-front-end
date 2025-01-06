import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div>
      <p>Checking authentication...</p>
    </div>
  );
}
