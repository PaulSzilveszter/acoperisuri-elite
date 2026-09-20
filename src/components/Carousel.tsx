"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import styles from "./Carousel.module.css";

export type Photo = { src: StaticImageData; alt: string };

export default function Carousel({ photos }: { photos: Photo[] }) {
    const [index, setIndex] = useState(0);
    const go = (n: number) => setIndex((n + photos.length) % photos.length);

   return (
    <div className={styles.carousel}>
        <div className={styles.viewport}>
            <div
                className={styles.track}
                style={{ translate: `${index * -100}% 0` }}
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
                    />
                ))}
            </div>
        </div>

        <button className={styles.prev} onClick={() => go(index - 1)} aria-label="Previous photo">
            <span className="material-symbols-outlined">chevron_left</span>
        </button>

        <button className={styles.next} onClick={() => go(index + 1)} aria-label="Next photo">
            <span className="material-symbols-outlined">chevron_right</span>
        </button>

        <div className={styles.dots}>
            {photos.map((photo, i) => (
                <button
                    key={photo.src.src}
                    className={styles.dot}
                    data-active={i === index}
                    onClick={() => setIndex(i)}
                    aria-label={`Photo ${i + 1}`}
                />
            ))}
        </div>
    </div>
);
}