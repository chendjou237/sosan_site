import type { Metadata } from "next";
import LegalDoc from "../LegalDoc";
import { doc } from "./content";

export const metadata: Metadata = {
  title: "Politique de confidentialité — SOSAN",
  description:
    "Politique de confidentialité de SOSAN : quelles données personnelles et de santé sont collectées, comment elles sont utilisées, partagées et sécurisées, et quels sont vos droits.",
};

export default function PrivacyPolicy() {
  return <LegalDoc doc={doc} />;
}
