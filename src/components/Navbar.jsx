import React, { Component } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";

export default class Navbar extends Component {
  render() {
    const { cart, onShowCart } = this.props;
    return (
      <>
        <AppBar>
          <Toolbar className="navbar">
            <Typography>Shop</Typography>
            <IconButton onClick={() => onShowCart(true)}>
              <Badge badgeContent={cart.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
