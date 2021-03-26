import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ link, onClick, children }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={styles.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
