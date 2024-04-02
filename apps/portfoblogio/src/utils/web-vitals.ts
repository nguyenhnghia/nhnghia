export function isActiveRWV(): boolean {
  return localStorage.getItem("report-web-vitals") === "1";
}
