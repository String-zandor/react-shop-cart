import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

import React, { Component } from "react";
import CartSummary from "./components/CartSummary";
import { PRODUCTS_DATA } from "./data/products";

export default class App extends Component {
  state = {
    products: PRODUCTS_DATA,
    showCart: false,
  };

  handleQtyUpdate = (product) => {
    this.setState({
      products: this.state.products.map((prod) => {
        return prod.id === product.id ? { ...prod, ...product } : prod;
      }),
    });
  };

  handleCartDisplay = (show) => {
    this.setState({ showCart: show });
  };

  render() {
    const cartSummary = (
      <CartSummary
        cart={this.state.products.filter((prod) => prod.qty > 0)}
        onShowCart={this.handleCartDisplay}
      />
    );

    const productList = (
      <ProductList
        onAddToCart={this.handleQtyUpdate}
        products={this.state.products}
      />
    );
    return (
      <>
        <Navbar
          cart={this.state.products.filter((prod) => prod.qty > 0)}
          onShowCart={this.handleCartDisplay}
        />
        {this.state.showCart ? cartSummary : productList}
      </>
    );
  }
}
