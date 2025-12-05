"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkgdzzpd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          background: "rgba(15,23,42,0.95)",
          padding: "2rem",
          borderRadius: "1.25rem",
          border: "1px solid rgba(148,163,184,0.5)",
          boxShadow: "0 22px 70px rgba(15,23,42,0.9)",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textTransform: "lowercase",
            letterSpacing: "0.06em",
          }}
        >
          PredictFun.com — this domain is for sale 
        </h1>

        <p
          style={{
            opacity: 0.85,
            marginBottom: "1.5rem",
            fontSize: "0.95rem",
          }}
        >
          If you&apos;re interested in acquiring this domain, please leave your
          email and a short message. We will reply by email.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            <label
              htmlFor="email"
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: 4,
              }}
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              style={{
                width: "100%",
                padding: "0.7rem 0.9rem",
                borderRadius: "0.65rem",
                border: "1px solid rgba(148,163,184,0.6)",
                backgroundColor: "rgba(15,23,42,0.9)",
                color: "#f9fafb",
                fontSize: "0.9rem",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: "0.9rem",
                marginBottom: 4,
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Briefly describe your interest or offer…"
              style={{
                width: "100%",
                padding: "0.7rem 0.9rem",
                borderRadius: "0.65rem",
                border: "1px solid rgba(148,163,184,0.6)",
                backgroundColor: "rgba(15,23,42,0.9)",
                color: "#f9fafb",
                fontSize: "0.9rem",
                resize: "vertical",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              marginTop: "0.3rem",
              padding: "0.8rem 1.4rem",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
              background:
                "linear-gradient(135deg, #22c55e, #16a34a, #15803d)",
              color: "#020617",
              opacity: status === "sending" ? 0.75 : 1,
            }}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p
              style={{
                fontSize: "0.85rem",
                color: "#4ade80",
                margin: 0,
              }}
            >
              Thank you! Your message has been sent.
            </p>
          )}

          {status === "error" && (
            <p
              style={{
                fontSize: "0.85rem",
                color: "#fca5a5",
                margin: 0,
              }}
            >
              Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
