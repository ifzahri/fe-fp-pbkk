import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const authCookie = (await cookieStore).get('auth-storage');

  if (authCookie) {
    redirect('/');
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {children}
    </main>
  );
}