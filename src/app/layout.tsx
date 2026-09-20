import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { cookies } from "next/headers";
import { THEME_COOKIE, isTheme } from "@/lib/theme";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
    subsets: ["latin", "latin-ext"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Acoperișuri Elite — Montaj și reparații acoperișuri în Cluj-Napoca",
    description:
        "Montăm și reparăm acoperișuri în Cluj și împrejurimi. Deviz gratuit în 24h, garanție la manoperă.",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const stored = (await cookies()).get(THEME_COOKIE)?.value;
    const theme = isTheme(stored) ? stored : undefined;

    return (
        <html lang="ro" data-theme={theme} className={sans.variable}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=call,check_circle,chevron_left,chevron_right,dark_mode,handyman,light_mode,roofing,schedule,verified,water_drop&display=block"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}