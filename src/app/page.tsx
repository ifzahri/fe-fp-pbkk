import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { TodoList } from '@/components/todo-list';

export default async function HomePage() {
  const cookieStore = cookies();
  const authCookie = (await cookieStore).get('auth-storage');

  // If no auth cookie, redirect to login
  if (!authCookie) {
    redirect('/login');
  }

  try {
    // Parse the auth cookie to check if it has valid token
    const authData = JSON.parse(authCookie.value);
    if (!authData?.state?.token) {
      redirect('/login');
    }
  } catch (error) {
    redirect('/login');
  }

  return (
    <main className="container mx-auto p-4">
      <TodoList />
    </main>
  );
}