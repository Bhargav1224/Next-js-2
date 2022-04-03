function ProductList({ products }) {
  return (
    <>
      <h1>products List</h1>
      {products?.map((products) => {
        return (
          <div key={products.id}>
            <h2>
              {products.id}. {products.title} - {products.price}
            </h2>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Re-Generating the ProductList");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}

// revalidate is used to revalidate this component every 30sec if any changes encountered it will update the UI.
