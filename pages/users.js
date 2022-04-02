import User from "../components/user";

function UserList(props) {
  const { users } = props;
  return (
    <>
      <h1>Welcome to Users Page</h1>
      <h1>List of Users</h1>
      <div>
        {users?.map((user) => {
          return (
            <div key={user.id}>
              <User user={user} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserList;

//building and async function which will used to get the external data

export async function getStaticProps() {
  const response = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
