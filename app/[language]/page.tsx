"use client";

import { useRouter } from "next/navigation";
import { use, useEffect } from "react";


export default function Page({ params }: { params: Promise<{ language: string }> }) {
  const { language } = use(params);
  const router = useRouter();

  useEffect(() => {
    router.push(`/${language}/resume`);
  }, [language, router]);
  return (
    <div></div>
  );
}
