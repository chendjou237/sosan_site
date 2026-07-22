"use client";

import { useState, type ReactNode } from "react";
import {
  CATEGORIES,
  categoryMeta,
  formatDate,
  type NewsCategory,
  type Post,
} from "./data";

export type NewsItem = { post: Post; cover: ReactNode };

export default function NewsList({ items }: { items: NewsItem[] }) {
  const [active, setActive] = useState<NewsCategory | "Tout">("Tout");
  const shown =
    active === "Tout" ? items : items.filter((it) => it.post.category === active);

  return (
    <>
      <div className="news-filters" role="tablist" aria-label="Filtrer par catégorie">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={`news-chip${active === c ? " news-chip--active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="wrap">
        <div className="news-page-grid">
          {shown.map(({ post, cover }) => (
            <NewsCard key={post.slug} post={post} cover={cover} />
          ))}
        </div>
      </div>
    </>
  );
}

function NewsCard({ post, cover }: NewsItem) {
  const meta = categoryMeta[post.category];
  const body = (
    <>
      {cover}
      <div className="news-card__body">
        <div className="news-card__meta">
          <span className={`news-card__cat news-card__cat--${meta.mod}`}>
            {meta.label}
          </span>
          <span className="news-card__date">{formatDate(post.date)}</span>
        </div>
        <h3>{post.title}</h3>
        <p className="news-card__excerpt">{post.excerpt}</p>
        {post.href && (
          <span className="news-card__link">
            Lire la suite <span aria-hidden="true">→</span>
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
