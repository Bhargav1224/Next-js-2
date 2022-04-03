import { useRouter } from "next/router";

function Product({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Product Details</h1>
      <h2>
        {product.id}.{product.title} - {product.price} ({product.description})
      </h2>
    </>
  );
}

export default Product;

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { productId } = params;
  console.log(`Generating / Re-Generating the ${productId}`);
  const response = await fetch(`http://localhost:4000/products/${productId}`);
  const data = await response.json();
  return {
    props: {
      product: data,
    },
     revalidate: 10,
  };
}

// stale data
//this page is statically generated after initial request any subsequent request will serve already generated request and that page and data will show up in UI
// revalidate is used to revalidate this component every 10sec if any changes encountered it will update the UI.
//static re-generation encountered 1st and page reloads..