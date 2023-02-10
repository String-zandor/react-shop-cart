import {
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { Component } from "react";

export default class CartSummary extends Component {
  render() {
    const { cart, onShowCart } = this.props;
    const subTotal = cart
      .map((product) => product.qty * product.price)
      .reduce((acc, curr) => acc + curr, 0);
    return (
      <div className="cart-summary">
        <Grid container spacing={2} className="cart-table">
          <Grid item xs={8}>
            <h4>Cart Summary</h4>
            <Button onClick={() => onShowCart(false)}>Return</Button>
          </Grid>
          <Grid item xs={8}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Qty</TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((product) => {
                    return (
                      <TableRow key={product.id}>
                        <TableCell>{product.title}</TableCell>
                        <TableCell align="right">{product.qty}</TableCell>
                        <TableCell align="right">
                          ${product.price.toFixed(2)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  <TableRow>
                    <TableCell colSpan={1} />
                    <TableCell colSpan={1} align="right">
                      Subtotal
                    </TableCell>
                    <TableCell align="right">${subTotal.toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}
