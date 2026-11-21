"use client";

import { startTransition, useActionState, useState } from "react";
import { ArrowRight, CircleAlert, CircleCheck, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/app/actions";
import { validateEnquiry, type EnquiryState } from "@/lib/enquiry";
import { tours } from "@/lib/tours";

const field =
  "mt-2 block w-full rounded-[2px] border-0 bg-white px-4 py-3.5 text-text ring-1 ring-inset ring-line transition-shadow placeholder:text-text-2/60 focus:outline-none focus:ring-2 focus:ring-text aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-error";

export function EnquiryForm({ defaultTour = "", heading = "Tell us about your trip" }: { defaultTour?: string; heading?: string }) {
  const [state, action, pending] = useActionState<EnquiryState, FormData>(submitEnquiry, { status: "idle" });
  const [clientErrors, setClientErrors] = useState<EnquiryState["errors"]>({});
  const errors = { ...state.errors, ...clientErrors };

  // Dispatch manually so React doesn't reset the form — if delivery is unavailable or
  // fails, the visitor keeps what they typed. (Without JS the native form action still works.)
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validateEnquiry(data) ?? {};
    setClientErrors(found);
    if (Object.keys(found).length) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    startTransition(() => action(data));
  }

  function onChange(e: React.FormEvent<HTMLFormElement>) {
    const name = (e.target as HTMLInputElement).name as keyof NonNullable<EnquiryState["errors"]>;
    if (clientErrors?.[name]) setClientErrors(validateEnquiry(new FormData(e.currentTarget)));
  }

  const err = (k: keyof NonNullable<EnquiryState["errors"]>) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-2 text-sm text-error">
        {errors[k]}
      </p>
    ) : null;
  const a11y = (k: keyof NonNullable<EnquiryState["errors"]>) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  if (state.status === "success") {
    return (
      <div role="status" className="flex items-start gap-4 bg-white p-8 ring-1 ring-line">
        <CircleCheck className="mt-0.5 size-6 shrink-0 text-success" aria-hidden />
        <p className="text-lg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} onSubmit={onSubmit} onChange={onChange} noValidate className="space-y-6">
      <h2 className="text-h3 font-semibold">{heading}</h2>
      <div className="hidden" aria-hidden>
        <label>
          Company <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Your name *
          <input name="name" autoComplete="name" className={field} {...a11y("name")} />
          {err("name")}
        </label>
        <label className="block text-sm font-medium">
          Email *
          <input name="email" type="email" autoComplete="email" className={field} {...a11y("email")} />
          {err("email")}
        </label>
      </div>

      <label className="block text-sm font-medium">
        Which trip?
        <select name="tour" defaultValue={defaultTour} className={field}>
          <option value="">Not sure yet / tailor-made</option>
          {tours.map((t) => (
            <option key={t.slug} value={t.slug}>
              {t.name} — {t.days} days
            </option>
          ))}
        </select>
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Roughly when?
          <input name="month" type="month" className={field} />
        </label>
        <label className="block text-sm font-medium">
          Travellers
          <input name="travellers" inputMode="numeric" placeholder="2" className={field} {...a11y("travellers")} />
          {err("travellers")}
        </label>
      </div>

      <label className="block text-sm font-medium">
        Tell us a little more *
        <textarea
          name="message"
          rows={5}
          placeholder="What you'd love to see, how you like to travel, anything we should know."
          className={field}
          {...a11y("message")}
        />
        {err("message")}
      </label>

      {state.message && state.status !== "idle" && (
        <p role="alert" className={`flex items-start gap-3 p-4 text-sm ${state.status === "unavailable" ? "bg-gold-light text-text" : "bg-error/10 text-error"}`}>
          <CircleAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-13 items-center gap-3 rounded-full bg-ink px-7 font-medium text-white transition-colors hover:bg-jungle disabled:opacity-60"
      >
        {pending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : null}
        {pending ? "Sending…" : "Send enquiry"}
        {!pending && <ArrowRight className="size-4" aria-hidden />}
      </button>
      <p className="text-sm text-text-2">We reply personally, usually within two working days. No mailing lists.</p>
    </form>
  );
}
