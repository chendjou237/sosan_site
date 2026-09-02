"use client";

import { useState, type ReactNode } from "react";
import {
  CATEGORY_KEYS,
  categoryMod,
  formatDate,
  type CategoryKey,
  type Post,
} from "../../content/news";
import type { Locale } from "../../i18n/config";
import { ui } from "../../i18n/ui";

export type NewsItem = { post: Post; cover: ReactNode };

/** "all" is a filter state, not a category — it has no post ever assigned to it. */
type Filter = CategoryKey | "all";

export default function NewsList({
  items,
  lang,
  categoryLabels,
}: {
  items: NewsItem[];
  lang: Locale;
  categoryLabels: Record<CategoryKey, string>;
}) {
  const [active, setActive] = useState<Filter>("all");
  const t = ui(lang).news;

  const shown =
    active === "all" ? items : items.filter((it) => it.post.category === active);

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.all },
    ...CATEGORY_KEYS.map((k) => ({ key: k as Filter, label: categoryLabels[k] })),
  ];

  return (
    <>
      <div className="news-filters" role="tablist" aria-label={t.filterLabel}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={active === f.key}
            className={`news-chip${active === f.key ? " news-chip--active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="wrap">
        <div className="news-page-grid">
          {shown.map(({ post, cover }) => (
            <NewsCard
              key={post.slug}
              post={post}
              cover={cover}
              lang={lang}
              categoryLabel={categoryLabels[post.category]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function NewsCard({
  post,
  cover,
  lang,
  categoryLabel,
}: NewsItem & { lang: Locale; categoryLabel: string }) {
  const mod = categoryMod[post.category];
  const t = ui(lang).news;
  const body = (
    <>
      {cover}
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className={`news-card__cat news-card__cat--${mod}`}>
            {categoryLabel}
          </span>
          <span className="news-card__date">{formatDate(post.date, lang)}</span>
        </div>
        <h3>{post.title}</h3>
        <p className="news-card__excerpt">{post.excerpt}</p>
        {post.href && (
          <span className="news-card__link">
            {t.readMore} <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </>
  );

  return post.href ? (
    <a
      className="news-card"
      href={post.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {body}
    </a>
  ) : (
    <article className="news-card">{body}</article>
  );
}
