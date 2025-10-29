import "./Card.css";

type CardProps = {
  imagePath: string;
  title: string;
  price: string;
};

export default function Card({ imagePath, title, price }: CardProps) {
  return (
    <div className="col">
      <div className="card product-card text-center">
        <img src={imagePath} loading="lazy" className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title mb-1">{title}</h5>
          <p className="card-text fw-semibold text-success">{price}</p>
        </div>
      </div>
    </div>
  );
}

