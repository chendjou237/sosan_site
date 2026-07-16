import Link from "next/link";
import { IconCross } from "./icons";

export default function NotFound() {
  return (
    <main className="notfound">
      <div className="notfound__mark">
        <IconCross size={22} />
      </div>
      <div className="notfound__code">404</div>
      <h1>Cette page n&apos;existe pas</h1>
      <p>
        Le lien que vous avez suivi est peut-être incorrect, ou la page a été
        déplacée.
      </p>
      <Link href="/" className="btn-green">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
