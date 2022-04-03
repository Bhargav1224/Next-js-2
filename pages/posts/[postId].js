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

// this function helps to understand the next js what data we need to fetch from post based on the ID'S
// next js know that there is a different kind of data for different id's
// here the static page is same for all the id's, but the data will be different. so we need to give the exact paths to understand the next js that these id are static kind of ...

export async function getStaticPaths() {
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
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { postId } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}
