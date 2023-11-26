import React, { useState } from "react";
import PentziButton from "./pentzi-button";
import PentziInput from "./pentzi-input";
import utilStyles from "../styles/utils.module.css";
import router from "next/router";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={utilStyles.verticalContainer}>
        <PentziInput
          label="Email"
          autoComplete="email"
          type="text"
          id="email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PentziInput
          label="Password"
          autoComplete="current-password"
          type="password"
          id="password"
          value={password}
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PentziButton
          variant="outlined"
          label="Lets go!"
          type="submit"
          value="Submit"
        />
        <Link href="/sign-up">
          <PentziButton label="Sign Up" type="button"></PentziButton>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
