import { useRouter } from "next/router";

function Post({ post }) {
  //fallback: true
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  // Above router.isFallback is used to avoid the error while building the app (if fallback:true)

  // this is required because if we visits other routes eg:- "/posts/4" which is not included in the getStaticPaths, then it will render Loading... text and it rendered the required data (i.e 4th id post).

  // where as fallback:false shows 404 page

  // in background 4th id post html and json file will be generated in the build folder. you can see this in .next/server/pages/posts or you can observe in the network tab, json file will be generated and file gets rendered.

  // whenever user visits to next page/route (eg:- "/posts/4" which is not included in the getStaticPaths), , 1st fallback is loaded and we will see Loading text and  then json file will be generated in the network tab and then full UI will be rendered. if you refresh the page without empty cache and reload, in the network tab you can see the related text loaded in the UI.

  // where as fallback:false shows direct UI.

  return (
    <>
      <h1>Post Page- Details</h1>
      <h1>
        {post.id}. {post.title}
      </h1>
      <p>{post.body}</p>
    </>
  );
}
export default Post;

// getStaticPaths function helps to understand the next js what data we need to fetch from post based on the ID'S
// next js know that there is a different kind of data for different id's
// here the static page is same for all the id's, but the data will be different. so we need to give the exact paths to understand the next js that these id are static kind of ...
// now we are hard-coded to understand the next js which postId details should be rendered, but this is not the recommended way to build the real-time-applications.

export async function getStaticPaths() {
  //   const response = await fetch("http://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   const paths = data.map((post) => {
  //     return {
  //       params: {
  //         postId: `${post.id}`, // always be a string
  //       },
  //     };
  //   });

  //   console.log(paths);
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // paths,
    fallback: true, // will discuss later
  };
}

// fallback:false ;
// it is mandatory to have getStaticPaths function, it accepts 3-values i.e; true, false, blocking

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  console.log(`Generating page for /posts/${postId}`);

  const data = await response.json();
  //returning the 404 page if id not there in the response...
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
