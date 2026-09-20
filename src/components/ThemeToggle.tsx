"use client";

import { useEffect, useState } from "react";
import { THEME_COOKIE, isTheme, type Theme } from "@/lib/theme";
import styles from "./ThemeToggle.module.css";

function currentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (isTheme(attr)) return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  function toggle() {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    document.cookie = `${THEME_COOKIE}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    setTheme(next);
  }

  return (
    <button
      className={styles.toggle}
      data-state={theme ?? "light"}
      data-mounted={theme !== null}
      onClick={toggle}
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark mode"
    >
      <span className={styles.knob} aria-hidden="true" />
      <span
        className={`${styles.icon} material-symbols-outlined`}
        data-icon="light"
      >
        light_mode
      </span>
      <span
        className={`${styles.icon} material-symbols-outlined`}
        data-icon="dark"
      >
        dark_mode
      </span>
    </button>
  );
}