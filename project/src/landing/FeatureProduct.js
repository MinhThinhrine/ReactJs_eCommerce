import { Link } from "react-router-dom";

function FeatureProduct(props) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to="/products/1" className="btn btn-outline-dark" replace>
          <img
              src={props.item.img_url}
              className="card-img-top"
              alt={props.item.name}
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title text-center">{props.item.name}</h5>
          <p className="card-text text-center text-muted">{props.item.price}</p>
          <div className="d-grid gap-2">
            <Link to="/products/1" className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
