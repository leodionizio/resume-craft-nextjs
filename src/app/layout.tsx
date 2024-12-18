import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

import { setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ClientProviders } from "@/components/shared/client.providers";

const fontTitle = Nunito({
  subsets: ["latin"],
  variable: "--font-text",
});
const fontText = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Resume Craft",
  description: "App for craft resumes online",
};

setDefaultOptions({ locale: ptBR });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontTitle.variable,
          fontText.variable
        )}
      >
        <ClientProviders>
          {children}
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  );
}
