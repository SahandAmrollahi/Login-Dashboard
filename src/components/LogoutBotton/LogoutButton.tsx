"use client";

import { useRouter } from "next/navigation";
import styles from "./LogoutButton.module.scss";
import { useAuth } from "@/context/AuthProvider";

const LogoutButton = () => {
  const {  setUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    router.push("/auth");
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      خروج
    </button>
  );
};

export default LogoutButton;
