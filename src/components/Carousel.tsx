"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef, useState } from "react";
import styles from "./Carousel.module.css";

export type Photo = { src: StaticImageData; alt: string };

export default function Carousel({ photos }: { photos: Photo[] }) {
    const [index, setIndex] = useState(0);
    const [drag, setDrag] = useState(0);
    const start = useRef<number | null>(null);

    const go = (n: number) => setIndex((n + photos.length) % photos.length);

    function onDown(e: React.PointerEvent) {
        start.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
    }

    function onMove(e: React.PointerEvent) {
        if (start.current === null) return;
        setDrag(e.clientX - start.current);
    }

    function onUp(e: React.PointerEvent) {
        if (start.current === null) return;
        const dx = e.clientX - start.current;
        const threshold = e.currentTarget.clientWidth * 0.18;

        if (dx < -threshold) go(index + 1);
        else if (dx > threshold) go(index - 1);

        start.current = null;
        setDrag(0);
    }

    const dragging = start.current !== null;

    return (
        <div className={styles.carousel}>
            <div
                className={styles.viewport}
                onPointerDown={onDown}
                onPointerMove={onMove}
                onPointerUp={onUp}
                onPointerCancel={onUp}
            >
                <div
                    className={styles.track}
                    data-dragging={dragging}
                    style={{ translate: `calc(${index * -100}% + ${drag}px) 0` }}
                >
                    {photos.map((photo, i) => (
                        <Image
                            key={photo.src.src}
                            src={photo.src}
                            alt={photo.alt}
                            className={styles.image}
                            sizes="100vw"
                            quality={85}
                            priority={i === 0}
                            draggable={false}
                        />
                    ))}
                </div>
            </div>

            <button
                className={styles.prev}
                onClick={() => go(index - 1)}
                aria-label="Poza anterioară"
            >
                <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <button
                className={styles.next}
                onClick={() => go(index + 1)}
                aria-label="Poza următoare"
            >
                <span className="material-symbols-outlined">chevron_right</span>
            </button>

            <div className={styles.dots}>
                {photos.map((photo, i) => (
                    <button
                        key={photo.src.src}
                        className={styles.dot}
                        data-active={i === index}
                        onClick={() => setIndex(i)}
                        aria-label={`Poza ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}