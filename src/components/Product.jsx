import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product, onAddToCart } = this.props;

    const actionsA = (
      <div>
        <Button
          variant="contained"
          onClick={() => onAddToCart({ ...product, qty: 1 })}
        >
          Add To Cart
        </Button>
      </div>
    );

    const actionsB = (
      <div>
        <IconButton
          onClick={() => onAddToCart({ ...product, qty: product.qty + 1 })}
        >
          <AddCircleIcon />
        </IconButton>
        <span>{product.qty}</span>
        <IconButton
          onClick={() => onAddToCart({ ...product, qty: product.qty - 1 })}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </div>
    );

    return (
      <div>
        <Card variant="outlined" className="product-display">
          <div className="img-container">
            <img src={product.image} alt={product.title} />
          </div>
          <CardContent>
            <Typography paragraph>{product.title}</Typography>
            <Typography paragraph>${product.price.toFixed(2)}</Typography>
            <Rating defaultValue={product.rating.rate} readOnly></Rating>
          </CardContent>
          <CardActions className="actions">
            {product.qty > 0 ? actionsB : actionsA}
          </CardActions>
        </Card>
      </div>
    );
  }
}
