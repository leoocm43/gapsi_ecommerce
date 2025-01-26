// ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductCard = ({ product, onDragStart }) => {
  return (
    
    <Card 
      style={{ width: '500px', height: '600px', margin: '15px' }} 
      onDragStart={(e) => onDragStart(e, product)} 
      draggable
    >
      <CardMedia 
        component="img" 
        height="400px" 
        image={product.image} 
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h7">{product.name}</Typography>
        <Typography color="textSecondary">${product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
