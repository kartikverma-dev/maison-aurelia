"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please complete each field with a valid email address.");
      return;
    }
    setError("Your details are validated. Connect this form to an email service to receive inquiries.");
    setSent(false);
  }

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate>
      <p className="form-heading">A note to the studio</p>
      <label htmlFor="name">Your name</label>
      <input id="name" name="name" autoComplete="name" placeholder="Name" required />
      <label htmlFor="email">Email address</label>
      <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      <label htmlFor="message">A little about your project</label>
      <textarea id="message" name="message" rows={3} placeholder="Tell us what you have in mind…" required />
      <button className="button button-dark form-submit" type="submit">{sent ? "Note prepared" : "Prepare inquiry"} {sent ? <Check size={16} /> : <ArrowUpRight size={16} />}</button>
      {error && <p className={`form-feedback ${sent ? "success" : ""}`} role="status">{error}</p>}
      <p className="form-privacy">Your details stay within this page. No message is sent until a delivery service is connected.</p>
    </form>
  );
}
