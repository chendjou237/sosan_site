import type { Metadata } from "next";
import LegalDoc from "../LegalDoc";
import { doc } from "./content";

export const metadata: Metadata = {
  title: "Suppression de compte — SOSAN",
  description:
    "Comment supprimer votre compte SOSAN depuis l’application, étape par étape — pour les patients, ainsi que pour les comptes médecins et hôpitaux.",
};

export default function AccountDeletion() {
  return <LegalDoc doc={doc} />;
}
