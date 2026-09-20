"use client";

import { useActionState } from "react";
import { sendRequest, type FormState } from "@/app/actions";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
    const [state, action, pending] = useActionState<FormState, FormData>(
        sendRequest,
        null,
    );

    return (
        <form action={action} className={styles.form}>
            <input type="text" name="website" className={styles.trap} tabIndex={-1} autoComplete="off" />

            <label className={styles.field}>
                <span>Nume *</span>
                <input name="name" required placeholder="Ion Popescu" />
            </label>

            <label className={styles.field}>
                <span>Telefon *</span>
                <input name="phone" type="tel" required placeholder="07xx xxx xxx" />
            </label>

            <label className={styles.field}>
                <span>Email</span>
                <input name="email" type="email" placeholder="ion@exemplu.ro" />
            </label>

            <label className={styles.field}>
                <span>Detalii despre lucrare</span>
                <textarea name="message" rows={4} placeholder="Suprafață aproximativă, tip de acoperiș, ce problemă aveți..." />
            </label>

            <div className="btn-row">
                <button type="submit" className="btn btn-primary" disabled={pending}>
                    {pending ? "Se trimite..." : "Trimite cererea"}
                </button>
            </div>

            {state && (
                <p className={styles.status} data-ok={state.ok}>
                    {state.message}
                </p>
            )}
        </form>
    );
}