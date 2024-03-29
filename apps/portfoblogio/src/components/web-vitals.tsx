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
    /**
     * Always report if:
     * - not production build
     *
     * Skip report if:
     * - on server side
     * - local storage doesn't have 'report-web-vitals' equals to '1'
     */
    if ((process.env.NODE_ENV === "production" && typeof window === "undefined") || localStorage.getItem("report-web-vitals") !== "1") return;
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
