import Image from "next/image";
import styles from "./page.module.css";
import PentziInput from "@/components/input";
import PentziButton from "@/components/button";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";
import router from "next/router";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const pentziFooterText =
    "Pentzi is a revolutionary pension investing app designed to simplify and enhance the way you manage your retirement funds. Pentzi makes it easy for anyone to take control of their pension investments. The app offers a range of investment options, tailored to meet individual retirement goals and risk preferences. Whether you're a seasoned investor or new to the world of pensions, Pentzi provides all the tools and resources needed to grow your retirement savings effectively. Stay informed with real-time market insights, easy portfolio management, and personalized investment strategies, all at your fingertips. Start securing your financial future today with Pentzi, the smart way to invest in your pension.";
  console.log("here");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("Logging in with:", username, password);
    // Add routing to /dashboard
    router.push("/dashboard");
  };

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/images/pentzi.svg" // Changed path
          alt="Pentzi Logo"
          width={1800}
          height={322}
          priority
        />
      </div>
      <div className={styles.center}>
        <form onSubmit={handleSubmit}>
          <div className={utilStyles.verticalContainer}>
            <PentziInput
              label="Username"
              autoComplete="username"
              type="text"
              id="username"
              value={username}
              required={true}
              onChange={(e) => setUsername(e.target.value)}
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
          </div>
        </form>
      </div>
      <div className={styles.description}>
        <p>{pentziFooterText}</p>
      </div>
    </main>
  );
}
