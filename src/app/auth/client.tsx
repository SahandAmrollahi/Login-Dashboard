"use client";

import LoginForm from "@/components/Form/LoginForm";
import styles from "./page.module.scss";

const LoginPage = () => {
 

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};
export default LoginPage;
