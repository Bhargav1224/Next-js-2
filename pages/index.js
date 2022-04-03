import Link from "next/link";

export default function Home() {
  // going to display the list of user from jsonplaceholder.com which is a fake api endpoint
  // Static generation with data

  return (
    <div>
      <h1>NEXT JS - Pre rendering</h1>
      <h1>Static generation with data</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </div>
  );
}
