import Carousel, { type Photo } from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { SITE } from "@/lib/site";
import styles from "./page.module.css";

import photo1 from "@/assets/1.avif";
import photo2 from "@/assets/2.avif";
import photo3 from "@/assets/3.avif";
import photo4 from "@/assets/4.avif";

const PHOTOS: Photo[] = [
    { src: photo1, alt: "Acoperiș din țiglă montat recent" },
    { src: photo2, alt: "Echipă lucrând la un acoperiș" },
    { src: photo3, alt: "Detaliu de șarpantă" },
    { src: photo4, alt: "Casă finalizată" },
];

const SERVICES = [
    { icon: "roofing", title: "Montaj acoperișuri", body: "Țiglă ceramică, metalică sau șindrilă bituminoasă, montate cu șarpantă nouă sau pe cea existentă." },
    { icon: "handyman", title: "Reparații și izolații", body: "Intervenim rapid la infiltrații, țiglă spartă sau elemente deteriorate de vânt." },
    { icon: "water_drop", title: "Jgheaburi și burlane", body: "Sisteme pluviale montate corect, ca apa să nu ajungă niciodată în pereți." },
];

const TRUST = [
    { icon: "schedule", title: "Deviz în 24h", body: "Venim, măsurăm, îți trimitem prețul final. Fără costuri ascunse." },
    { icon: "verified", title: "Garanție 10 ani", body: "Garanție scrisă la manoperă, pe lângă cea a producătorului de materiale." },
    { icon: "check_circle", title: "Curat la final", body: "Strângem molozul și lăsăm curtea exact cum am găsit-o." },
];

function WhatsAppIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07s.89 2.4 1.02 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29" />
        </svg>
    );
}

export default function Home() {
    return (
        <>
            <Navbar />
            <main id="top">
                <section className={styles.hero}>
                    <Carousel photos={PHOTOS} />
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>{SITE.city} și împrejurimi</p>
                        <h1 className={styles.title}>
                            Acoperișul făcut o dată, <span>ca lumea</span>
                        </h1>
                        <p className={styles.tagline}>
                            Montaj și reparații acoperișuri, cu deviz gratuit în 24 de ore
                            și garanție 10 ani la manoperă.
                        </p>
                        <div className={`btn-row ${styles.heroBtns}`}>
                            <a href={SITE.phoneHref} className="btn btn-primary">
                                <span className="material-symbols-outlined">call</span>
                                Sună acum
                            </a>
                            {/* buton WhatsApp fără funcție deocamdată */}
                            <button type="button" className="btn btn-whatsapp">
                                <WhatsAppIcon />
                                WhatsApp
                            </button>
                            <a href="#contact" className="btn btn-ghost">Cere ofertă</a>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <p className={styles.kicker}>Ce facem</p>
                    <h2 className={styles.h2}>Servicii complete de acoperiș</h2>
                    <div className={styles.grid}>
                        {SERVICES.map((s) => (
                            <article key={s.title} className={styles.card}>
                                <span className={`material-symbols-outlined ${styles.cardIcon}`}>{s.icon}</span>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardBody}>{s.body}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className={`${styles.section} ${styles.soft}`}>
                    <p className={styles.kicker}>De ce noi</p>
                    <h2 className={styles.h2}>Fără surprize, de la ofertă la final</h2>
                    <div className={styles.grid}>
                        {TRUST.map((t) => (
                            <article key={t.title} className={styles.card}>
                                <span className={`material-symbols-outlined ${styles.cardIcon}`}>{t.icon}</span>
                                <h3 className={styles.cardTitle}>{t.title}</h3>
                                <p className={styles.cardBody}>{t.body}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="contact" className={`${styles.section} ${styles.contact}`}>
                    <div className={styles.contactIntro}>
                        <p className={styles.kicker}>Contact</p>
                        <h2 className={styles.h2}>Cere o ofertă gratuită</h2>
                        <p className={styles.cardBody}>
                            Completează formularul și te sunăm în cel mult 24 de ore.
                            Sau contactează-ne direct, dacă e urgent.
                        </p>
                        <div className={`btn-row ${styles.contactBtns}`}>
                            <a href={SITE.phoneHref} className="btn btn-primary">
                                <span className="material-symbols-outlined">call</span>
                                {SITE.phone}
                            </a>
                            <button type="button" className="btn btn-whatsapp">
                                <WhatsAppIcon />
                                WhatsApp
                            </button>
                        </div>
                    </div>
                    <ContactForm />
                </section>

                <footer className={styles.footer}>
                    <span>
                        Acoperișuri <strong>Elite</strong>
                    </span>
                    <span className={styles.cardBody}>
                        © {new Date().getFullYear()} — {SITE.city}
                    </span>
                </footer>
            </main>
        </>
    );
}