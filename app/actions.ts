"use server";

import { validateEnquiry, type EnquiryState } from "@/lib/enquiry";
import { site } from "@/lib/site";

// Integration point: set ENQUIRY_WEBHOOK_URL (e.g. a CRM, Zapier, Formspree or email
// service endpoint) to receive enquiries as JSON. Without it, visitors are told plainly
// that online enquiries aren't connected yet.
export async function submitEnquiry(_prev: EnquiryState, data: FormData): Promise<EnquiryState> {
  if (data.get("company")) return { status: "success", message: "Thanks — we'll be in touch." }; // honeypot

  const errors = validateEnquiry(data);
  if (errors && Object.keys(errors).length) return { status: "error", errors, message: "Please check the highlighted fields." };

  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint) {
    return {
      status: "unavailable",
      message: `Online enquiries aren't connected yet. Please email us at ${site.email} — your message hasn't been sent.`,
    };
  }

  const payload = Object.fromEntries(
    ["name", "email", "tour", "month", "travellers", "message"].map((k) => [k, String(data.get(k) ?? "").trim().slice(0, 4000)]),
  );

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, source: "website", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("Enquiry delivery failed", err);
    return { status: "error", message: `Something went wrong sending your enquiry. Please try again or email ${site.email}.` };
  }

  return { status: "success", message: "Thank you — your enquiry is with us. We reply within two working days." };
}
