// Shared by the client form and the server action so both validate identically.
export type EnquiryState = {
  status: "idle" | "success" | "error" | "unavailable";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "message" | "travellers", string>>;
};

export function validateEnquiry(data: FormData): EnquiryState["errors"] {
  const errors: NonNullable<EnquiryState["errors"]> = {};
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const travellers = String(data.get("travellers") ?? "").trim();

  if (name.length < 2) errors.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "A sentence or two about your trip helps us reply properly.";
  if (travellers && (!/^\d+$/.test(travellers) || +travellers < 1 || +travellers > 40))
    errors.travellers = "Enter a number between 1 and 40.";
  return errors;
}
