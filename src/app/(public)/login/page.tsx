import { Suspense } from "react";
import { LoginForm } from "@/components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | The Consigliere",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--cream)]">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif tracking-wider">
            THE CONSIGLIERE
          </h1>
          <p className="text-sm text-[var(--gray-500)] mt-2 tracking-wider uppercase">
            Admin Portal
          </p>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
