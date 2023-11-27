import React, { useState } from 'react'

import utilStyles from "../../styles/utils.module.css";
import router from 'next/router';
import Image from 'next/image';
import styles from './sign-up.module.css';
import Link from 'next/link';
import PentziButton from '@/components/pentzi-button';
import PentziInput from '@/components/pentzi-input';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        router.push("/dashboard");
      };
  return (
    <div>
        <div className={` ${styles.center}`}>
        <Image 
        className={styles.logo}
          src="/images/pentzi.svg"
          alt="Pentzi Logo"
          width={180}
          height={180}
          priority/>
        </div>
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
              label="phone"
              autoComplete="phone"
              type="text"
              id="phone"
              value={phone}
              required={true}
              onChange={(e) => setPhone(e.target.value)}
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
            
            <PentziInput
              label="Confirm Password"
              autoComplete="current-password"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              required={true}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <PentziButton
              variant="outlined"
              label="Lets go!"
              type="submit"
              value="Submit"
            />
            <Link href="/">
                <PentziButton label='Back'/>
            </Link>
          </div>
        </form>
        </div>
  )
}

export default SignUp;
