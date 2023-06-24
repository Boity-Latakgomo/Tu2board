import React from "react";
import styles from "./authEntry.module.css";

interface IAuthEntryProps {
  placeholder?: string;
  value?: any;
  onChange?: (text: any) => void;
  type?: "text" | "password" | "number" | "email";
}

function AuthEntry({ placeholder, value, onChange, type }: IAuthEntryProps) {
  return (
    <div className={styles.container}>
      <input
        type={type ?? "text"}
        onChange={(e) => (onChange ? onChange(e.target.value) : {})}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}

export default AuthEntry;
