"use client";

import { useState } from "react";
import { IconCheckCircle } from "./icons";
import { CONTACT_EMAIL } from "./constants";
import type { Locale } from "./i18n/config";
import { ui } from "./i18n/ui";

export default function ContactForm({ lang }: { lang: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const t = ui(lang).form;

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success__icon">
          <IconCheckCircle size={40} />
        </div>
        <h3 className="font-poppins">{t.successTitle}</h3>
        <p>{t.successBody}</p>
      </div>
    );
  }

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const email = data.get("email");
        const phone = data.get("phone");
        const message = data.get("message");

        const subject = `${t.mailSubject} ${firstName} ${lastName}`;
        const body = [
          `${t.mailName} ${firstName} ${lastName}`,
          `${t.mailEmail} ${email}`,
          phone ? `${t.mailPhone} ${phone}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n");

        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;

        setSubmitted(true);
      }}
    >
      <div className="form__row">
        <input
          required
          name="firstName"
          placeholder={t.firstName}
          aria-label={t.firstName}
        />
        <input
          required
          name="lastName"
          placeholder={t.lastName}
          aria-label={t.lastName}
        />
      </div>
      <input
        required
        type="email"
        name="email"
        placeholder={t.email}
        aria-label={t.email}
      />
      <input name="phone" placeholder={t.phone} aria-label={t.phone} />
      <textarea
        required
        name="message"
        rows={4}
        placeholder={t.message}
        aria-label={t.message}
      />
      <button type="submit">{t.submit}</button>
    </form>
  );
}
