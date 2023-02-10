import { Grid } from "@mui/material";
import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    const productList = this.props.products.map((product) => {
      return (
        <Grid item key={product.id}>
          <Product product={product} onAddToCart={this.props.onAddToCart} />
        </Grid>
      );
    });

    return (
      <div className="products-container">
        <Grid container spacing={2} className="product-grid">
          {productList}
        </Grid>
      </div>
    );
  }
}
