"use client";

import styles from "./MenuButton.module.css";

export default function MenuButton({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <button
            className={styles.menuButton}
            data-open={isOpen}
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Meniu"
        >
            {["bar-1", "bar-2", "bar-3", "floor", "wall-l", "wall-r", "roof-l", "roof-r"].map(
                (part) => (
                    <span key={part} className={styles.line} data-part={part} />
                ),
            )}
        </button>
    );
}