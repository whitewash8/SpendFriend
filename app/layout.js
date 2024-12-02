import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "SpendFriend AI",
  description: "An AI-powered financial advisor",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      secretKey={process.env.CLERK_SECRET_KEY}
    >
      <html lang="en">
        <head>
          {/* Metadata like title and favicon */}
          <link rel="icon" href="/favicon.ico" />
          <title>SpendFriend AI</title>
          <meta name="description" content="An AI-powered financial advisor" />
        </head>
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
