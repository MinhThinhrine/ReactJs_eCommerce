import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from 'react';
import {randomNumber} from "react-ratings-declarative/build/utils";

function Product(props) {

  return (
      <div>
        <div className="col">
          <div className="card shadow-sm">
            <Link to="/products/1" href="!#" replace>
              <img
                  className="card-img-top bg-dark cover"
                  height="200"
                  alt=""
                  src={props.item.img_url}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title text-center text-dark text-truncate">
                {props.item.name}
              </h5>
              <p className="card-text text-center text-muted mb-0">{props.item.price}</p>
              <div className="d-grid d-block">
                <button className="btn btn-outline-dark mt-3">
                  <FontAwesomeIcon icon={["fas", "cart-plus"]}/> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Product;
