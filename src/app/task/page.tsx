import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { TaskList } from '@/components/TaskList';
import { useAuthStore } from '@/store/auth';

export default function HomePage() {
  const router = useRouter();
  const { token, user } = useAuthStore();

  useEffect(() => {
    if (!token) {
      router.replace('/login');
    }
  }, [token, router]);

  if (!token || !user) {
    return null;
  }

  return <TaskList />;
}