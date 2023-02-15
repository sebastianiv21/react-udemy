import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My first book',
    description: 'The first book I ever wrote',
  },
  {
    id: 'p2',
    price: 4,
    title: 'Bike',
    description: 'A bike to ride on weekends',
  },
  {
    id: 'p3',
    price: 7,
    title: 'Car toy',
    description: 'The car toy for your kid',
  },
  {
    id: 'p4',
    price: 8,
    title: 'Nails',
    description: 'Some nails to repair the house',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
