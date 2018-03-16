import React from "react";
import * as styles from './NewsList.styles';

export default function NewsList({ news }) {
  return (
    <div className={styles.newslist}>
      <div className={styles.header}>
        <strong>Wizard News</strong>
      </div>
      {news &&
        news.map(post =>
          <div key={post.id}>
            <p>
              {post.id} ⬆ {post.title}
            </p>
            <small>
              {post.upvotes} upvotes by {post.author}
            </small>
          </div>
        )}
    </div>
  );
}
