import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_ITEMS = [
    {
      id: "p1",
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
    },
    { id: "p2", title: "Test2", price: 12, description: "Product another one" },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((items) => {
          return (
            <ProductItem
              key={items.id}
              title={items.title}
              price={items.price}
              description={items.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
