"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "@/lib/site";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={styles.navbar} data-scrolled={scrolled}>
            <a href="#top" className={styles.brand}>
                Acoperișuri <strong>Elite</strong>
            </a>

            <div className={styles.actions}>
                <a href={SITE.phoneHref} className={`btn btn-sm btn-primary ${styles.phone}`}>
                    <span className="material-symbols-outlined">call</span>
                    <span className={styles.phoneText}>{SITE.phone}</span>
                </a>
                <ThemeToggle />
            </div>
        </header>
    );
}