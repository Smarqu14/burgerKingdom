import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductInfo,
  ProductCard,
  ProductImg,
} from './ProductsElements';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, idx) => {
          return (
            <ProductCard key={idx}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
