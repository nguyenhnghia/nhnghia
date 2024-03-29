"use client";

import { useReportWebVitals } from "next/web-vitals";

declare global {
  type WebVitalsReport = Record<string, unknown>;
  // eslint-disable-next-line no-var -- This is necessary to save the web vitals report
  var __webVitalsReport: WebVitalsReport;
}
globalThis.__webVitalsReport = {};

const WebVitals: React.FC = () => {
  useReportWebVitals((metric: { name: string }) => {
    if (process.env.NODE_ENV === "production") return;
    try {
      globalThis.__webVitalsReport[metric.name] = metric;
    } catch (error) {
      //
    }
  });

  return null;
};

WebVitals.displayName = "WebVitals";

export default WebVitals;
