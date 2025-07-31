"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styleDashboard from "./page.module.scss";
import LogoutButton from "@/components/LogoutBotton/LogoutButton";
import { useAuth } from "@/context/AuthProvider";

const DashboardPage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>در حال بارگذاری...</p>;
  }

  if (!user) return null;

  return (
    <div className={styleDashboard.container}>
      <h1>👋 {user.name.first} سلام</h1>
      <p>خوش اومدی به داشبورد</p>
      <img src={user.picture.large} alt="User" />
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
