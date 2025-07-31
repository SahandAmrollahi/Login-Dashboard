"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const Home = () => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    } else {
      router.push("/dashboard");
    }
  }, [router, user]);

  return (
    <p style={{ textAlign: "center", marginTop: "20px" }}>
      در حال انتقال، لطفاً صبر کنید...
    </p>
  );
};
export default Home;
