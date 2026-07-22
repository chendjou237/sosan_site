import type { Metadata } from "next";
import Header from "../Header";
import Footer from "../Footer";
import Mockup from "../Mockup";
import { newsCover } from "../assets";
import { sortedPosts } from "./data";
import NewsList, { type NewsItem } from "./NewsList";

export const metadata: Metadata = {
  title: "Actualités & collaborations — SOSAN",
  description:
    "Annonces, événements, presse et partenariats de SOSAN : suivez la campagne et les collaborations qui rapprochent l'Afrique de soins fiables, rapides et accessibles.",
};

export default function Actualites() {
  const items: NewsItem[] = sortedPosts.map((post) => ({
    post,
    cover: (
      <Mockup
        asset={newsCover(post.slug, post.title)}
        variant="photo"
        className="news-card__media"
      />
    ),
  }));

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="news-hero">
          <div className="wrap">
            <span className="kicker">Actualités &amp; collaborations</span>
            <h1>La santé en mouvement</h1>
            <p>
              Nos annonces, événements, retombées presse et partenariats — au
              plus près de la campagne SOSAN et de ses collaborations.
            </p>
          </div>
        </section>

        <NewsList items={items} />
      </main>
      <Footer />
    </>
  );
}
