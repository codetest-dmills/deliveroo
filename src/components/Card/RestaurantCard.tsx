import { Fragment } from "react";

interface RestaurantProps {
  restaurant: { id: string; name: string; image: string; url: string; price: number; tags: string[] };
}

function RestaurantCard({ restaurant, ...rest }: RestaurantProps) {
  const { id, name, image, url, price, tags } = restaurant;

  return (
    <article key={id} {...rest}>
      <a className="card" href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <div className="tags">
          {tags?.map((tag) => (
            <Fragment key={tag}>
              <p key={tag}>{tag}</p>
              <span className="sep">•</span>
            </Fragment>
          ))}
          <p>{"£".repeat(price)}</p>
        </div>
      </a>
    </article>
  );
}

export default RestaurantCard;
