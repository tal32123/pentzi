import Image from "next/image";
import styles from "./page.module.css";
import PentziButton from "@/components/pentzi-button";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";

export default function Home() {
  const pentziFooterText =
    "Pentzi is a revolutionary pension investing app designed to simplify and enhance the way you manage your retirement funds. Pentzi makes it easy for anyone to take control of their pension investments. The app offers a range of investment options, tailored to meet individual retirement goals and risk preferences. Whether you're a seasoned investor or new to the world of pensions, Pentzi provides all the tools and resources needed to grow your retirement savings effectively. Stay informed with real-time market insights, easy portfolio management, and personalized investment strategies, all at your fingertips. Start securing your financial future today with Pentzi, the smart way to invest in your pension.";
  console.log("here");

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/images/pentzi.svg"
          alt="Pentzi Logo"
          width={1800}
          height={322}
          priority
        />
      </div>
      <div className={styles.center}>
        <div className={styles.verticalContainer}>
          <LoginForm />
        </div>
      </div>
      <div className={styles.description}>
        <p>{pentziFooterText}</p>
      </div>
    </main>
  );
}
