"use client";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

const Insights: React.FC = () => {
  const router = useRouter();

  return <SpeedInsights route={router.pathname} />;
};

Insights.displayName = "insights";

export default Insights;
