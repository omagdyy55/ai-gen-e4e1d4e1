"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page if not authenticated
    const isAuthenticated = false; // Replace with actual authentication check
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return null; // This page will redirect, no content needed
};

export default Page;
