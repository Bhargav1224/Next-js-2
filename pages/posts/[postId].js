function Post({ post }) {

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
    fallback: 'blocking', // will discuss later
  };
}

// fallback:false ;
// it is mandatory to have getStaticPaths function, it accepts 3-values i.e; true, false, blocking
// fallback: 'blocking'
//prefers if the data want to show little slow

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
