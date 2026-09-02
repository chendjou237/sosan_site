import Header from "../../Header";
import Footer from "../../Footer";
import Mockup from "../../Mockup";
import { newsCover } from "../../assets";
import { sortPosts } from "../../content/news";
import { getContent } from "../../content";
import { localeParams, isLocale, DEFAULT_LOCALE } from "../../i18n/config";
import { pageMetadata } from "../../i18n/metadata";
import NewsList, { type NewsItem } from "./NewsList";

export const generateStaticParams = localeParams;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const { news } = getContent(lang);
  return pageMetadata({ lang, path: "/actualites/", ...news.meta });
}

export default async function Actualites({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: raw } = await params;
  const lang = isLocale(raw) ? raw : DEFAULT_LOCALE;
  const { news } = getContent(lang);

  const items: NewsItem[] = sortPosts(news.posts).map((post) => ({
    post,
    cover: (
      <Mockup
        asset={newsCover(post.slug, post.title)}
        lang={lang}
        variant="photo"
        className="news-card__media"
      />
    ),
  }));

  return (
    <>
      <Header lang={lang} />
      <main id="main-content">
        <section className="news-hero">
          <div className="wrap">
            <span className="kicker">{news.hero.kicker}</span>
            <h1>{news.hero.title}</h1>
            <p>{news.hero.lead}</p>
          </div>
        </section>

        <NewsList
          items={items}
          lang={lang}
          categoryLabels={news.categoryLabels}
        />
      </main>
      <Footer lang={lang} />
    </>
  );
}
