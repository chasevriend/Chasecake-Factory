import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/icons-material';
import { AddShoppingCart } from '@mui/icons-material';
import { ClassNames } from '@emotion/react';

const Product = () => {
  return (
    <>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
        </Card>
    </>
  )
}

export default Product