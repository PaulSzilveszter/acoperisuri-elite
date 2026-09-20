"use server";

import { Resend } from "resend";

export type FormState = { ok: boolean; message: string } | null;

export async function sendRequest(
    _prev: FormState,
    formData: FormData,
): Promise<FormState> {
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // capcană anti-spam: boții completează câmpul ascuns
    if (formData.get("website")) return { ok: true, message: "Mulțumim!" };

    if (!name || !phone) {
        return { ok: false, message: "Te rugăm să completezi numele și telefonul." };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: "Acoperișuri Elite <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL!,
            replyTo: email || undefined,
            subject: `Cerere nouă de la ${name}`,
            text: [
                `Ai primit o cerere nouă de la ${name}.`,
                ``,
                `Telefon: ${phone}`,
                `Email: ${email || "—"}`,
                ``,
                `Mesaj:`,
                message || "—",
            ].join("\n"),
        });

        return { ok: true, message: "Mulțumim! Te sunăm în cel mult 24 de ore." };
    } catch {
        return { ok: false, message: "Nu am putut trimite mesajul. Sună-ne direct." };
    }
}