import React, { Fragment } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Fragment>
      <Link to={"/product/${product.id}"}>
        
        <Card className="custom-card">
          <Card.Img
            variant="top"
            className="py-3 card-img"
            src={product.image}
          />
          <Card.Body>
            <Card.Title className="fs-6">
              {product.title.slice(0, 30)}
            </Card.Title>
            <Card.Text className="text-capitaliize text-decoration-none fs-6">
              {product.category}
            </Card.Text>
            <h5>{product.price}</h5>
          </Card.Body>
        </Card>
      </Link>
    </Fragment>
  );
};

export default ProductCard;
