"use client";

import { isProdEnv, isServerSide } from "@utils/context";
import { isActiveRWV } from "@utils/web-vitals";
import { useReportWebVitals } from "next/web-vitals";

declare global {
  type WebVitalsReport = Record<string, unknown[]>;
  // eslint-disable-next-line no-var -- This is necessary to save the web vitals report
  var __webVitalsReport: WebVitalsReport;
}
globalThis.__webVitalsReport = {};

const WebVitals: React.FC = () => {
  useReportWebVitals((metric: { name: string }) => {
    if (isServerSide()) return;
    if (!isProdEnv() || !isActiveRWV()) return;
    try {
      if (metric.name in globalThis.__webVitalsReport) {
        globalThis.__webVitalsReport[metric.name].push(metric);
      } else {
        globalThis.__webVitalsReport[metric.name] = [metric];
      }
    } catch (error) {
      //
    }
  });

  return null;
};

WebVitals.displayName = "WebVitals";

export default WebVitals;
