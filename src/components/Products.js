import { Grid } from '@mui/material';
import React from 'react'
import { items } from '../data/Data';
import Product from './Product';

const Products = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {items.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products