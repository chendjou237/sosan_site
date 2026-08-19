import type { Metadata } from "next";
import LegalDoc from "../LegalDoc";
import { doc } from "./content";

export const metadata: Metadata = {
  title: "Termes et conditions d’utilisation — SOSAN",
  description:
    "Termes et conditions d’utilisation de SOSAN : objet de l’application, obligations des professionnels de santé, propriété intellectuelle, politique de remboursement et garanties.",
};

export default function Terms() {
  return <LegalDoc doc={doc} />;
}
