// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';
import { ProductItem } from '../../../_mocks_/products';

// ----------------------------------------------------------------------

interface ProductListProps {
  products: ProductItem[];
}

export default function ProductList({ products, ...other }: ProductListProps) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
