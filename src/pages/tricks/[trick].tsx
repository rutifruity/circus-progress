import HomePage from "@/components/home-page/home-page";
import { useRouter } from "next/router";
import React from "react";

export default function TrickPage() {
  const router = useRouter();
  const { trick } = router.query;

  return <HomePage page={trick as string} />;
}
