"use client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#03031a", color: "#fff", padding: 16, fontFamily: "monospace" }}>
        <h2>Something broke</h2>
        <pre style={{ whiteSpace: "pre-wrap", color: "#fca5a5" }}>{error.message}</pre>
        <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, opacity: 0.7 }}>{error.stack}</pre>
      </body>
    </html>
  );
}