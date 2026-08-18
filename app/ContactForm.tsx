"use client";

import { useState } from "react";
import { IconCheckCircle } from "./icons";
import { CONTACT_EMAIL } from "./constants";


export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success__icon">
          <IconCheckCircle size={40} />
        </div>
        <h3 className="font-poppins">Message envoyé</h3>
        <p>Merci, notre équipe vous recontactera très vite.</p>
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

        const subject = `Contact depuis le site — ${firstName} ${lastName}`;
        const body = [
          `Nom : ${firstName} ${lastName}`,
          `E-mail : ${email}`,
          phone ? `Téléphone : ${phone}` : null,
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
        <input required name="firstName" placeholder="Prénom" aria-label="Prénom" />
        <input required name="lastName" placeholder="Nom de famille" aria-label="Nom de famille" />
      </div>
      <input required type="email" name="email" placeholder="E-mail" aria-label="E-mail" />
      <input name="phone" placeholder="Téléphone" aria-label="Téléphone" />
      <textarea required name="message" rows={4} placeholder="Votre message" aria-label="Votre message" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
