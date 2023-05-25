import { Grid } from '@mui/material';
import React from 'react'
import Products from '../data/Data';

const Products = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
            {Products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
  )
}

export default Products